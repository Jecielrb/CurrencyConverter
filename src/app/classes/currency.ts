export interface Currency
{
    [key: string]: number;
}

export interface CurrencyRates {
    currency : Currency,
    base : string
}