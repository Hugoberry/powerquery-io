---
title: Stripe.Method
---

# Stripe.Method


## Description

Creează un apel către API-ul Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Creează un apel către API-ul Stripe de la https://api.stripe.com/v1/<code>metodă</code>, cu înregistrarea <code>parametriSuplimentari</code> transmisă ca parametri suplimentari și lista <code>NumeColoane</code> a numelor de coloane așteptate. Se utilizează versiunea Stripe 2015-10-16.


## Examples

### Example #1 
Returnează un tabel cu evenimentele create după 1 noiembrie 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Un tabel cu evenimentele specificate pentru contul Stripe curent
```


### Example #2 
Returnează un tabel cu toate codurile SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Un tabel cu toate codurile SKU pentru contul Stripe curent
```



