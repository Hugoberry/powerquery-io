---
title: Stripe.Method
---

# Stripe.Method


Hívást indít a Stripe API-ra.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Hívást indít a https://api.stripe.com/v1/`method` címen található Stripe API-ra. Az `additionalParameters` rekorddal további paramétereket továbbíthat, a `ColumnNames` listával pedig a várható oszlopneveket sorolhatja fel. A Stripe 2015-10-16-os verziója van használatban.


## Examples

### Example #1
A 2015. november 1. után létrehozott eseményeket tartalmazó táblát adja vissza.
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Az aktuális Stripe-fiókhoz megadott eseményeket tartalmazó tábla
```


### Example #2
A termékváltozatokat tartalmazó táblát adja vissza.
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Az aktuális Stripe-fiók termékváltozatait tartalmazó tábla
```



