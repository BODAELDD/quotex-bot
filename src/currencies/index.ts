export const currencies = ["AUDUSD", "BRLUSD", "EURUSD", "USDARS", "USDEGP", "USDINR", "USDTRY", "AUDCAD", "GBPAUD", "GBPJPY", "USDCOP", "USDIDR", "USDMXN", "EURAUD", "CADJPY", "EURCHF", "EURGBP", "GBPUSD", "NZDCHF", "USDCAD", "USDCHF", "USDNGN", "EURCAD", "NZDCAD", "USDJPY", "USDPHP", "CADCHF", "NZDJPY", "AUDJPY", "CHFJPY", "EURJPY", "USDPKR", "AUDCHF", "USDBDT", "USDDZD"] as const;
export type TCurrencyPairs = typeof currencies[number];