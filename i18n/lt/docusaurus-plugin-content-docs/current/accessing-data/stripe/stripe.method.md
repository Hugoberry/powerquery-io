---
title: Stripe.Method
---

# Stripe.Method


Kreipiamasi į „Stripe“ API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Kreipiamasi į „Stripe“ API naudojant https://api.stripe.com/v1/`method`, įrašas `additionalParameters` pateikiamas kaip papildomi parametrai ir pateikiamas visų numatomų stulpelių pavadinimų sąrašas `ColumnNames`. Naudojama „Stripe“ versija 2015-10-16.


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



