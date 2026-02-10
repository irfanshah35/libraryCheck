const BASE_URL = "https://t20exch.com";
export const BASE_URL_WS = "https://t20exch.com";

// const BASE_URL = "";
// export const BASE_URL_WS = "";

export const CONFIG = {
    SiteName: "exchange",
    siteKey: "10",
    userLogin: BASE_URL + "/app/users/playerLogin",
    getUserProfile: BASE_URL + "/app/exchange/users/userProfile",
    getBallByBallMarket: BASE_URL + "/api/exchange/markets/getBallByBallMarket",
    videoStreamURL: BASE_URL + "/api/exchange/streaming/exchEventsStreaming",
    getUserBalance: BASE_URL + "/app/exchange/users/userBalance",
    getExposureListURL: BASE_URL + "/app/exchange/users/userEventsExposure",
    eventMatchedBetList:
        BASE_URL + "/app/exchange/users/betlist/eventMatchedBetList",
    getAllEventsList: BASE_URL + "/api/navigation/allEventsList", //done
    getAllEventsListTime: 20,
    getSportsList: BASE_URL + "/api/exchange/sports/sportsList", //done
    getSportsListTime: 1440, //done
    getTopCasinoGame: BASE_URL + "/api/navigation/casinoEvents", // =---=  Done
    getTopCasinoGameTime: 1440,
    casinoTableList:
        BASE_URL + "/api/exchange/navigations/casino/casinoTableList",
    casinoTabList: BASE_URL + "/api/exchange/navigations/casino/casinoTabList",
    casinoInternational:
        BASE_URL + "/api/exchange/navigations/internationalCasinoList",
    casinoInternationalTime: 1440,
    menuList: BASE_URL + "/api/navigation/menuList",
    menuListTime: 1440,
    getIpLocation: "https://pro.ip-api.com/json/?key=qSA5ctYZHdWsx04",
    getUserBetStake: BASE_URL + "/app/exchange/users/userBetStakeList",
    getUserBetStakeTime: 518400,
    getRules: BASE_URL + "/api/exchange/rules/getSportsRule",
    getRulesTime: 1440,
    activityList: BASE_URL + "/app/exchange/users/userActivityLogs",
    changeUserPassword: BASE_URL + "/app/exchange/users/userChangePassword",
    getSlider: BASE_URL + "/api/navigation/sliderList", //done
    getSliderTime: 20,
    getBanner: BASE_URL + "/api/navigation/bannersList",
    getBannerTime: 20,
    getExchangeNews: BASE_URL + "/api/navigation/exchangeNews", // done
    getExchangeNewsTime: 120,
    statement: BASE_URL + "/app/exchange/users/userAccountStatement",
    profitLoss: BASE_URL + "/app/exchange/users/pl/userSportsProfitloss",
    newProfitLoss: BASE_URL + "/app/exchange/users/pl/userSportsProfitlossNew",
    profitLossEvents:
        BASE_URL + "/app/exchange/users/pl/userEventsProfitlossNew",
    betHistory: BASE_URL + "/app/exchange/users/userBetList",
    marketList: BASE_URL + "/api/navigation/marketList",
    getRacingEvents: BASE_URL + "/api/navigation/racingEventsList", //done
    getRacingEventsTime: 20, //done
    userUpdateStackValueURL:
        BASE_URL + "/app/exchange/users/updateUserBetStake",
    profitLossMarket:
        BASE_URL + "/app/exchange/users/pl/userMarketsProfitlossNew",
    getAllMarketplURL: BASE_URL + "/app/exchange/users/pl/getMatchOddsPl",
    placeBetURL: BASE_URL + "/app/exchange/users/placebet",
    unmatchedBets: BASE_URL + "/app/exchange/users/matchedUnmatchedBets",
    cancelBetsAllUnmatchedBets: BASE_URL + "/app/exchange/users/cancelBets",
    getMarketBook: BASE_URL + "/app/exchange/users/pl/marketBook",

    exchEventsStreaming: BASE_URL + "/api/streaming/exchEventsStreaming",
    getSponserDetailsURL: BASE_URL + "/v1/exchange/sponsor/sponsorshipsDetails",

    profitLossHistory: BASE_URL + "/app/exchange/users/bet/userMarketBetsNew",
};

export const STACK_VALUE = [
    {
        stakeName: "1000",
        stakeAmount: "1000",
    },
    {
        stakeName: "5000",
        stakeAmount: "5000",
    },
    {
        stakeName: "10000",
        stakeAmount: "10000",
    },
    {
        stakeName: "25000",
        stakeAmount: "25000",
    },
    {
        stakeName: "50000",
        stakeAmount: "50000",
    },
    {
        stakeName: "100000",
        stakeAmount: "100000",
    },
    {
        stakeName: "200000",
        stakeAmount: "200000",
    },
    {
        stakeName: "500000",
        stakeAmount: "500000",
    },
];

export const DefaultStackForT20worldexch = [
    {
        stakeName: "25000",
        stakeAmount: "25000",
    },
    {
        stakeName: "50000",
        stakeAmount: "50000",
    },
    {
        stakeName: "100000",
        stakeAmount: "100000",
    },
    {
        stakeName: "200000",
        stakeAmount: "200000",
    },
    {
        stakeName: "500000",
        stakeAmount: "500000",
    },
    {
        stakeName: "1000000",
        stakeAmount: "1000000",
    },
    {
        stakeName: "2000000",
        stakeAmount: "2000000",
    },
    {
        stakeName: "5000000",
        stakeAmount: "5000000",
    },
];
