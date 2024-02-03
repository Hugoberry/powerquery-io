---
title: Stripe.Method
---

# Stripe.Method


## Description

Stripe API интерфейсіне қоңырау соғады.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

https://api.stripe.com/v1/<code>method</code> мекенжайында қосымша параметрлер ретінде <code>қосымша параметрлер</code> жазбасы бар және күтілген арна атауларының <code>Баған атаулары</code> тізімі бар Stripe API интерфейсіне қоңырау соғады. Stripe бағдарламасының 2015-10-16 нұсқасы пайдаланылады.


## Examples

### Example #1 
2015 жылдың 1 қарашасынан кейін жасалған оқиғалары бар кестені қайтарады
```powerquery
Stripe.Әдіс("оқиғалар", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Ағымдағы Stripe тіркелгісіне арналған көрсетілген оқиғалары бар кесте
```


### Example #2 
Барлық SKU бар кестені қайтарады
```powerquery
Stripe.Әдіс("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Ағымдағы Stripe тіркелгісіне арналған барлық SKU бар кесте
```



