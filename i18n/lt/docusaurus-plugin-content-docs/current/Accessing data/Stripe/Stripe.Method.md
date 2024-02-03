---
title: Stripe.Method
---

# Stripe.Method


## Description

Kreipiamasi į „Stripe“ API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Kreipiamasi į „Stripe“ API naudojant https://api.stripe.com/v1/<code>method</code>, įrašas <code>additionalParameters</code> pateikiamas kaip papildomi parametrai ir pateikiamas visų numatomų stulpelių pavadinimų sąrašas <code>ColumnNames</code>. Naudojama „Stripe“ versija 2015-10-16.


## Examples

### Example #1 
Pateikiama lentelė su įvykiais, sukurtais po 2015 m. lapkričio 1 d.
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Lentelė su nurodytais įvykiais, susijusiais su dabartine „Stripe“ paskyra
```


### Example #2 
Pateikiama lentelė su visais SKU.
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Lentelė su visais SKU, susijusiais su dabartine „Stripe“ paskyra
```



