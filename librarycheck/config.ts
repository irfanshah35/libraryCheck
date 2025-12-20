
const BASE_URL = 'https://t20exch.com/'

// const BASE_URL = ''

export const CONFIG = {
  siteKey: '2',
  SiteName: 'd247',
  domain: BASE_URL + '',
  userLogin: BASE_URL + "/app/users/userLogin",
  SportsList: BASE_URL + "/api/exchange/sports/sportsList",
  SportsListTime: 1440,
  SearchEventList: BASE_URL + "/api/exchange/events/searchEventList",
  SearchEventListTime: 1440,
  getIpLocation: 'https://pro.ip-api.com/json/?key=qSA5ctYZHdWsx04',
  getAllEventsList: BASE_URL + "/api/exchange/market/matchodds/allEventsList",
  getAllEventsListTime: 20,
  exchangeTypeList: BASE_URL + "/api/exchange/exchangeTypeList",
  exchangeTypeListTime: 1440,
  specialEvents: BASE_URL + "/api/exchange/navigations/specialEvents",
  specialEventsTime: 20,
  casinoEvents: BASE_URL + "/api/exchange/navigations/casinoEvents",
  casinoEventsTime: 1440,
  internationalCasinoList: BASE_URL + "/api/exchange/navigations/internationalCasinoList",
  internationalCasinoListTime: 1440,

  getMarketsEventList: BASE_URL + "/api/exchange/markets/getMarketsEventList",
  sendUserRegisterOtp: BASE_URL + '/app/users/sendUserRegisterOtp',
  verifyUserRegisterOtp: BASE_URL + "/app/users/verifyUserRegisterOtp",
  sendForgotPasswordOtp: BASE_URL + "/app/users/sendForgotPasswordOtp",
  verifyForgotPassword: BASE_URL + "/app/users/verifyForgotPassword",
  userAccountStatement: BASE_URL + "/app/exchange/users/userAccountStatement",
  userBalance: BASE_URL + "/app/exchange/users/userBalance",
  changedPasswordHistory: BASE_URL + "/app/exchange/users/changedPasswordHistory",
  userChangePassword: BASE_URL + "/app/exchange/users/userChangePassword",
  userActivityLogs: BASE_URL + "/app/exchange/users/userActivityLogs",
  userSportsProfitloss: BASE_URL + "/app/exchange/users/pl/userSportsProfitloss",
  userMarketsProfitloss: BASE_URL + "/app/exchange/users/pl/userMarketsProfitloss",
  userEventsProfitloss: BASE_URL + "/app/exchange/users/pl/userEventsProfitloss",
  userUnSettledBetList: BASE_URL + "/app/exchange/users/betlist/userUnSettledBetList",
  sportsRulesList: BASE_URL + "/api/exchange/rules/sportsRulesList",
  sportsRulesListTime: 1440,
  userEventsExposure: BASE_URL + "/app/exchange/users/userEventsExposure",
  userSettledBetList: BASE_URL + "/app/exchange/users/betlist/userSettledBetList",
  userSettleBetListCustomURL: BASE_URL + "/app/exchange/users/betlist/mobile/settledBetList",
  userAccountStatementCustomURL: BASE_URL + "/app/exchange/users/mobile/accountStatement",
  updateUserBetStake: BASE_URL + "/app/exchange/users/updateUserBetStake",
  userBetStakeList: BASE_URL + "/app/exchange/users/userBetStakeList",
  getThemeConfig: BASE_URL + "/api/exchange/theme/getThemeConfig",
  getThemeConfigTime: 1440,
  sliderList: BASE_URL + "/api/exchange/slider/sliderList",

  getDepositDetails: BASE_URL + "/app/exchange/users/deposit/getDepositDetails",
  createDepositTransaction: BASE_URL + "/app/exchange/users/deposit/createDepositTransaction",
  // getMarketList :  "http://192.168.0.151:3002/get_market_list",

  userWithdrawBankList: BASE_URL + "/app/exchange/users/withdraw/userWithdrawBankList",
  addWithdrawalBank: BASE_URL + "/app/exchange/users/withdraw/addWithdrawalBank",
  calculateWithdrawAmt: BASE_URL + "/app/exchange/users/withdraw/calculateWithdrawAmt",
  deleteWithdrawBank: BASE_URL + "/app/exchange/users/withdraw/deleteWithdrawBank",
  bankList: BASE_URL + "/app/exchange/users/withdraw/bankList",
  withdrawalRequest: BASE_URL + "/app/exchange/users/withdraw/withdrawalRequest",
  cancelWithdrawalRequest: BASE_URL + "/app/exchange/users/withdraw/cancelWithdrawalRequest",
  lastestWithdrawURL: BASE_URL + "/app/exchange/users/withdraw/latestWithdrawalList",
  getMatchOddsPl: BASE_URL + "/app/exchange/users/pl/getMatchOddsPl",
  getFancyPl: BASE_URL + "/app/exchange/users/pl/getFancyPl",
  getSportsbookPl: BASE_URL + "/app/exchange/users/pl/getSportsbookPl",
  getBookmakersPl: BASE_URL + "/app/exchange/users/pl/getBookmakersPl",
  getUserBetList: BASE_URL + "/app/exchange/users/betlist/getUserBetList",
  placebet: BASE_URL + "/app/exchange/users/placebet",
  eventMatchedBetList: BASE_URL + "/app/exchange/users/betlist/eventMatchedBetList",
  unSettledBetList: BASE_URL + "/app/exchange/users/betlist/mobile/unSettledBetList",
  fancyMarketList: BASE_URL + "/api/exchange/markets/fancyMarketList",
  fancyMarketListTime: 1440,
  videoStreamURL: BASE_URL + '/api/exchange/streaming/exchEventsStreaming',
  sportTournamentsList: BASE_URL + '/api/exchange/tournaments/sportTournamentsList',
  racingEventsList: BASE_URL + '/api/exchange/events/racingEventsList',
  racingEventsListTime: 20,
  userLogout: BASE_URL + '/app/exchange/users/userLogout',
  bannerList: BASE_URL + '/api/exchange/banner/bannerList',
  bannerListTime: 1440,
  virtualSportsList: BASE_URL + '/api/exchange/sports/virtualSportsList',
  virtualSportsListTime: 30,
  getSportsRule: BASE_URL + '/api/exchange/rules/getSportsRule',
  tipsPreviewList: BASE_URL + '/api/exchange/tips/tipsPreviewList',
  tipsPreviewListTime: 30,
  favouritesExpriTime: 10,

  exchangeNews: BASE_URL + '/api/exchange/news/exchangeNews',
  exchangeNewsTime: 20,

  lotterySportsList: BASE_URL + "/api/exchange/sports/lotterySportsList",

  lotterySportsListTime: 20,
  // getLotteryPl:BASE_URL + "/app/exchange/users/pl/getLotteryPl",
  getLotteryPl: BASE_URL + "/app/exchange/users/pl/getLotteryPl",
  lotteryPlaceBet: BASE_URL + "/app/exchange/users/lotteryPlaceBet",

  marketFancyBook: BASE_URL + '/app/exchange/users/pl/marketFancyBook',
  pakoCompressEncrypt: BASE_URL + "/test/pakoCompressEncrypt",
  sliderkey: 'hideSliderTime',
  sliderhidetime: 24 * 60 * 60 * 1000,


  userProfile: BASE_URL + "/app/exchange/users/userProfile",
  // ball by ball
  getBallByBallMarket:BASE_URL+ "/api/exchange/markets/getBallByBallMarket",
  getMarketEventResults: BASE_URL + '/api/exchange/results/getMarketEventResults',

  ballbyPlacebet: BASE_URL + "/app/exchange/users/Placebet",
  betsRollingCommission: BASE_URL + "/app/exchange/users/commission/betsRollingCommission",
}


export const STACK_VALUE = [
  {
    stakeName: '1000',
    stakeAmount: '1000'
  },
  {
    stakeName: '5000',
    stakeAmount: '5000'
  },
  {
    stakeName: '10000',
    stakeAmount: '10000'
  },
  {
    stakeName: '25000',
    stakeAmount: '25000'
  },
  {
    stakeName: '50000',
    stakeAmount: '50000'
  },
  {
    stakeName: '100000',
    stakeAmount: '100000'
  },
  {
    stakeName: '200000',
    stakeAmount: '200000'
  },
  {
    stakeName: '500000',
    stakeAmount: '500000'
  },

];