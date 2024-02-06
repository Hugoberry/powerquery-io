---
title: Stripe.Method
---

# Stripe.Method


Foretager et kald til Stripe-API&#39;en.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Foretager et opkald til Stripe-API'en på https://api.stripe.com/v1/<code>metode</code>, hvor posten <code>additionalParameters</code> er godkendt som yderligere parametre og listen <code>ColumnNames</code> viser de forventede kolonnenavne. Stripe-version 2015-10-16 anvendes.


## Examples

### Example #1 
Returnerer en tabel med hændelser, der er oprettet efter den 1. november 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
En tabel med de angivne hændelser for den aktuelle Stripe-konto
```


### Example #2 
Returnerer en tabel med alle varenumre
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
En tabel med alle varenumre for den aktuelle Stripe-konto
```



