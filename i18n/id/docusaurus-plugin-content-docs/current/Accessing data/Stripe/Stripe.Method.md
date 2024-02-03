---
title: Stripe.Method
---

# Stripe.Method


## Description

Melakukan panggilan ke Stripe API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Melakukan panggilan ke Stripe API di https://api.stripe.com/v1/<code>method</code>, dengan rekaman <code>additionalParameters</code> yang diberikan sebagai parameter tambahan dan daftar <code>ColumnNames</code> nama kolom yang diminta. Stripe Versi 2015-10-16 sedang digunakan.


## Examples

### Example #1 
Mengembalikan tabel dengan peristiwa yang dibuat setelah 1 November 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Tabel dengan peristiwa tertentu untuk akun Stripe saat ini
```


### Example #2 
Mengembalikan tabel dengan semua SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Tabel dengan semua SKU untuk akun Stripe saat ini
```



