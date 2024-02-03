---
title: Stripe.Method
---

# Stripe.Method


## Description

Pokliče vmesnik API za Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Pokliče vmesnik API za Stripe na naslovu https://api.stripe.com/v1/<code>method</code> z zapisom <code>additionalParameters</code> kot dodatnim parametrom in seznamom pričakovanih imen stolpcev <code>ColumnNames</code>. Uporabljena je različica Stripe 2015-10-16.


## Examples

### Example #1 
Vrne tabelo z dogodki, ustvarjenimi po 1. novembru 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Tabela z določenimi dogodki za trenutni račun Stripe
```


### Example #2 
Vrne tabelo z vsemi inventarnimi številkami (SKU)
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Tabela z vsemi inventarnimi številkami (SKU) za trenutni račun Stripe
```



