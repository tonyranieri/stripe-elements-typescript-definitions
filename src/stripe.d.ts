// Type definitions for stripe elements 
// Project: https://stripe.com/docs/elements/reference
// Definitions by: Tony Ranieri
// Definitions: 

interface StripeFactory {
    new (apiKey: string): Stripe;
}

interface Stripe {
    elements(options: string): StripeElements;
    elements(): StripeElements;
    createToken(element: StripeElement, options: StripePaymentFormData): Promise<StripeCreateTokenResult>;
}

interface StripeCreateTokenResult {
    token: StripeToken;
    error: StripeError;
}

interface StripeToken {
    id: string;
    object: string;
    card: StripeCard;
    client_ip: string;
    created: number;
    livemode: boolean;
    type: string;
    used: boolean;
}

interface StripeCard {
    id: string;
    object: string;

    address_city: string;
    address_country: string;
    address_line1: string;
    address_line1_check: string;
    address_line2: string;
    address_state: string;
    address_zip: string;
    address_zip_check: string;
    brand: string;
    country: string;
    cvc_check: string;
    dynamic_last4: string;
    exp_month: number;
    exp_year: number;
    funding: string;
    last4: string;

    // metadata hash
    // Set of key/value pairs that you can attach to an object. 
    // It can be useful for storing additional information about the object in a structured format.
    //     //     metadata: {
    //     //     },

    name: string;
    tokenization_method: string;
}

interface StripeError {
    message: string;
}

interface StripePaymentFormData {
    name: string;
    address_line1: string;
    address_line2: string;
    address_city: string;
    address_state: string;
    address_zip: string;
    address_country: string;
    currency: string;
}

interface StripeElements {
    create(type: string): StripeElement;
    create(type: string, options: string): StripeElement;
}

interface StripeElement {
    mount(domElement: string): void;
}

declare var Stripe: StripeFactory;
declare module "Stripe" {
    export = StripeFactory;
}
