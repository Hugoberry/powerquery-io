---
title: Stripe.Method
---

# Stripe.Method


Anropar Stripe-API:et.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Anropar Stripe-API:et på https://api.stripe.com/v1/<code>method</code>, med den alternativa posten <code>additionalParameters</code> överförd som extra parametrar och listan <code>ColumnNames</code> med förväntade kolumnnamn. Stripe-version 2015-10-16 används.


## Examples

### Example #1 
Returnerar en tabell med händelser skapade efter den 1 november 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
En tabell med de angivna händelserna för det aktuella Stripe-kontot
```


### Example #2 
Returnerar en tabell med alla SKU:er
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
En tabell med alla SKU:er för det aktuella Stripe-kontot
```



