import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        apiData: null,
        highest: null,
        lowest: null,
        timeSeriesType: null,
        matches: [],
        selectedMatchItem: ''
    },
    getters: {
        getApiData(state) {
            return state.apiData;
        },
        getTimeSeriesType(state) {
            return state.timeSeriesType;
        },
        getLowest(state) {
            return state.lowest;
        },
        getHighest(state) {
            return state.highest;
        },
        getMatches(state) {
            return state.matches;
        }
    },
    mutations: {
        setApiData(state, payload) {
            state.apiData = payload;
        },
        setHighest(state, payload) {
            state.highest = payload;
        },
        setLowest(state, payload) {
            state.lowest = payload;
        },
        setTimeSeriesType(state, payload) {
            state.timeSeriesType = payload;
        },
        setMatches(state, payload) {
            state.matches = payload;
        },
        setSelectedMatchItem(state, payload) {
            state.selectedMatchItem = payload;
        }
    },
    actions: {
        async fetchApiData({ commit, state }, payload) {
            // prevent request if selectedMatchItem is null
            if(state.selectedMatchItem && state.selectedMatchItem.length >= 3) {
                var method_key = {method: null, key: null};

                switch(payload) {
                    case 'DAILY':
                        method_key = {method: 'TIME_SERIES_DAILY', key: 'Time Series (Daily)'};
                        commit('setTimeSeriesType', 'DAILY');
                        break;
                    case 'WEEKLY':
                        method_key = {method: 'TIME_SERIES_WEEKLY', key: 'Weekly Time Series'};
                        commit('setTimeSeriesType', 'WEEKLY');
                        break;
                    case 'MONTHLY':
                        method_key = {method: 'TIME_SERIES_MONTHLY', key: 'Monthly Time Series'};
                        commit('setTimeSeriesType', 'MONTHLY');
                        break;
                    default:
                        method_key = {method: 'TIME_SERIES_DAILY', key: 'Time Series (Daily)'};
                        commit('setTimeSeriesType', 'DAILY');
                }

                var options = {
                    method: 'GET',
                    url: 'https://alpha-vantage.p.rapidapi.com/query',
                    params: {
                        function: method_key.method,
                        // symbol: 'MSFT',
                        symbol: state.selectedMatchItem,
                        datatype: 'json',
                        output_size: 'compact'
                    },
                    headers: {
                        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                        'x-rapidapi-key': '4ac3658e9emsh7d07bcc3beb843cp188d91jsn39ce47a4454c'
                    }
                };

                await axios.request(options).then(function (response) {
                    var timeSeries = response.data[method_key.key];
                    // configure response data to use inside chart structure
                    var configuredResData = Object.keys(timeSeries).map(timeSeriesKey => {
                        // add key value(date) inside each object
                        timeSeries[timeSeriesKey]["6. date"] = timeSeriesKey;
                        return timeSeries[timeSeriesKey];
                    }).reverse().slice(-100)
                    commit('setApiData', configuredResData);
                    
                    // get min and max values and set lowest and highest states
                    let minChartThreshold = Math.min(...configuredResData.map(item => Number(item["3. low"])));
                    commit('setLowest', minChartThreshold - minChartThreshold % 20);
                    let maxChartThreshold = Math.max(...configuredResData.map(item => Number(item["2. high"])));
                    commit('setHighest', maxChartThreshold - maxChartThreshold % 20 + 20);

                }).catch(function (error) {
                    console.error(error);
                });
            }
        },
        async apiSearchData({ commit }, searchKey) {
            var options = {
                method: 'GET',
                url: 'https://alpha-vantage.p.rapidapi.com/query',
                params: {keywords: searchKey, function: 'SYMBOL_SEARCH', datatype: 'json'},
                headers: {
                  'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                  'x-rapidapi-key': '4ac3658e9emsh7d07bcc3beb843cp188d91jsn39ce47a4454c'
                }
              };
              
              axios.request(options).then((response) => {
                  console.log(response.data.bestMatches.map(match => match['1. symbol']));
                  commit('setMatches', response.data.bestMatches.map(match => match['1. symbol']));
              }).catch(function (error) {
                  console.error(error);
              });
        }
    }
});