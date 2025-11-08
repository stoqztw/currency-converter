export interface ExchangeConfig {
	API_KEY: string;
}

export interface Currencies {
	[key: string]: number;
}

export interface Exchange {
	[key: string]: unknown;
	conversion_rates: Currencies;
}

export interface ExchangeRate {
	[key: string]: number;
}
