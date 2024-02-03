---
title: Stripe.Method
---

# Stripe.Method


## Description

Buat panggilan ke API Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Membuat panggilan ke API Stripe di https://api.stripe.com/v1/<code>method</code>, dengan rekod <code>additionalParameters</code> yang dihantar sebagai parameter tambahan dan senarai <code>ColumnNames</code> nama jalur yang dijangka. Versi Stripe 2015-10-16 digunakan.


## Examples

### Example #1 
Mengembalikan jadual dengan acara yang dicipta selepas 1 November 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Jadual dengan acara yang ditentukan bagi akaun Stripe semasa
```


### Example #2 
Mengembalikan jadual dengan semua SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Jadual dengan semua SKU bagi akaun Stripe semasa
```



