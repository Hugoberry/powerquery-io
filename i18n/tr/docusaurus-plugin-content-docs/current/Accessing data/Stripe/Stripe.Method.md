---
title: Stripe.Method
---

# Stripe.Method


Stripe API&#39;ine çağrıda bulunur.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Ek parametre olarak geçirilen isteğe bağlı <code>additionalParameters</code> kaydı ve beklenen sütun adlarına ilişkin <code>ColumnNames</code> listesi ile birlikte https://api.stripe.com/v1/<code>method</code> üzerinde bulunan Stripe API'sine çağrıda bulunur. 2015-10-16 Stripe Sürümü kullanılmaktadır.


## Examples

### Example #1 
1 Kasım 2015 tarihinden sonra oluşturulan etkinliklerin yer aldığı bir tablo döndürür
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Geçerli Stripe hesabına ilişkin belirtilen etkinliklerin yer aldığı bir tablo
```


### Example #2 
Tüm SKU&#39;ların bulunduğu bir tablo döndürür
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Geçerli Stripe hesabına ilişkin tüm SKU'ların yer aldığı bir tablo
```



