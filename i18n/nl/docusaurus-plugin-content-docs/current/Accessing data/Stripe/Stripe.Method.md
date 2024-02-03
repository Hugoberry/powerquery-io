---
title: Stripe.Method
---

# Stripe.Method


## Description

De Stripe API aanroepen.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Hiermee wordt de Stripe API op https://api.stripe.com/v1/<code>method</code> aangeroepen, waarbij de record <code>additionalParameters</code> als aanvullende parameters wordt doorgegeven en de lijst <code>ColumnNames</code> met de verwachte kolomnamen wordt geretourneerd. Stripe-versie 2015-10-16 wordt gebruikt.


## Examples

### Example #1 
Hiermee wordt een tabel geretourneerd met gebeurtenissen die na 1 november 2015 zijn gemaakt
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Een tabel met de opgegeven gebeurtenissen voor het huidige Stripe-account
```


### Example #2 
Hiermee wordt een tabel met alle voorraadeenheden geretourneerd
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Een tabel met alle voorraadeenheden voor het huidige Stripe-account
```



