---
title: Stripe.Method
---

# Stripe.Method


## Description

Uskutočňovanie volania do rozhrania Stripe API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Uskutočňovanie volania do rozhrania Stripe API na adrese https://api.stripe.com/v1/<code>method</code> so záznamom <code>additionalParameters</code>, ktorý predstavuje dodatočné parametre, a zoznamom <code>ColumnNames</code> s očakávanými názvami stĺpcov. Používa sa Stripe verzie 2015-10-16.


## Examples

### Example #1 
Vráti tabuľku s udalosťami vytvorenými po 1. novembri 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Tabuľka so zadanými udalosťami v aktuálnom konte Stripe
```


### Example #2 
Vráti tabuľku so všetkými jednotkami SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Tabuľka so všetkými jednotkami SKU v aktuálnom konte Stripe
```



