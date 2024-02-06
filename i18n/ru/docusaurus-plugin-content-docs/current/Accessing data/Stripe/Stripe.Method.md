---
title: Stripe.Method
---

# Stripe.Method


Вызывает Stripe API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Вызывает Stripe API по адресу https://api.stripe.com/v1/<code>method</code> с записью <code>additionalParameters</code>, передаваемой в качестве дополнительных параметров, и перечисляет <code>ColumnNames</code> ожидаемых имен столбцов. Используется версия Stripe Version 2015-10-16.


## Examples

### Example #1 
Возвращает таблицу с событиями, созданными после 1 ноября 2015 г.
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Таблица с указанными событиями для текущей учетной записи Stripe
```


### Example #2 
Возвращает таблицу со всеми номерами SKU.
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Таблица со всеми номерами SKU для текущей учетной записи Stripe
```



