---
title: Stripe.Method
---

# Stripe.Method


Викликає Stripe API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Викликає Stripe API за адресою https://api.stripe.com/v1/`method`. При цьому передаються запис `additionalParameters` для додаткових параметрів і список очікуваних імен стовпців `ColumnNames`. Використовується ресурс Stripe версії 2015-10-16.


## Examples

### Example #1
Повертає таблицю з подіями, створеними після 1 листопада 2015 р.
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Таблиця з указаними подіями для поточного облікового запису Stripe
```


### Example #2
Повертає таблицю з усіма обліковими номерами.
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Таблиця з усіма обліковими номерами для поточного облікового запису Stripe
```



