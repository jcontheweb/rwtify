# rwtify-tenant-client

```
Administrator: {
    id: Number,
    email: String,
    password: String,
    register_ip: String
}

Tenant: {
    id: Number,
    administrator_id: Number,
    name: String,
    protected: Boolean,
    password?: String,
    meta: Meta,
    components: ComponentList,
    store: Store
}

Meta: {
    id: Number,
    tenant_id: Number,
    title?: String,
    hid?: String,
    name?: String,
    description?: String
}

ComponentList: {
    id: number,
    tenant_id: Number,
    logo: Logo
    menu: Menu,
    hero: Hero,
    cta: CTA,
    accepted_payments: AcceptedPayments,
    statistics: Statistics,
    order_process: OrderProcess,
    footer: Footer
}

Menu: {
    id: Number,
    component_list_id: Number,
    buy_osrs: Boolean,
    buy_rs3: Boolean,
    sell_gold: Boolean,
    swap_gold: Boolean,
    rent_main: Boolean,
}

Logo: {
    id: Number,
    component_list_id: Number,
    light: String,
    dark: String,
}

Hero: {
    id: Number,
    component_list_id: Number,
    background_image: String,
    background_color: String,
    heading: String,
    subheading: String,
}

CTA: {
    id: Number,
    component_list_id: Number,
    heading: String,
    subheading: String,
    action: Enum<BUY_OSRS, BUY_RS3, SWAP_GOLD, SELL_GOLD>
}

AcceptedPayments: {
    id: Number,
    component_list_id: Number,
    bitcoin: Boolean,
    bank_transfer: Boolean,
    mastercard: Boolean,
    visa: Boolean,
    skrill: Boolean,
    paypal: Boolean,
    interac: Boolean
}

Statistics: {
    id: Number,
    component_list_id: Number,
    total_clients: Number,
    total_sales_usd: Number,
    total_sales_gold: Number,
    total_orders: Number,
    total_years: Number,
}

OrderProcess: {
    id: Number,
    component_list_id: Number,
    step_one_heading: String,
    step_one_icon: String,
    step_two_heading: String,
    step_two_icon: String,
    step_three_heading: String,
    step_three_icon: String,
}

Footer: {
    id: Number,
    component_list_id: Number,
    statement?: String
}

Store: {
    id: Number,
    tenant_id: Number,
    services: ServiceList,
    currencies: CurrencyList
}

ServiceList: {
    id: Number,
    store_id: Number,
    fighter_torso: Boolean,
    infernal_cape: Boolean,
    fire_cape: Boolean,
    rent_main: Boolean
}

CurrencyList: {
    id: Number,
    store_id: Number,
    sell_osrs?: Number,
    sell_rs3?: Number,
    swap_gold: Boolean,
}
```
