---
title: Stripe.Method
---

# Stripe.Method


## Description

Šī funkcija izsauc Stripe API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Šī funkcija izsauc pakalpojuma Stripe API adresē https://api.stripe.com/v1/<code>metode</code>, pieņemot ierakstu <code>additionalParameters</code> kā papildu parametrus un paredzēto kolonnu nosaukumu sarakstu <code>ColumnNames</code>. Tiek izmantota pakalpojuma Stripe versija 2015-10-16.


## Examples

### Example #1 
Šī funkcija atgriež tabulu, kurā uzskaitīti pēc 2015. gada 1. novembra izveidotie notikumi
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Tabula, kurā uzskaitīti norādītie pašreizējā Stripe konta notikumi
```


### Example #2 
Šī funkcija atgriež tabulu, kurā norādītas visas SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Tabula, kurā norādītas visas pašreizējā Stripe konta SKU
```



