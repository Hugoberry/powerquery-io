---
title: Stripe.Method
---

# Stripe.Method


## Description

Zavolá rozhraní Stripe API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Zavolá rozhraní Stripe API na adrese https://api.stripe.com/v1/<code>metoda</code> se záznamem dodatečných parametrů <code>další_parametry</code> a seznamem názvů očekávaných sloupců <code>názvy_sloupců</code>. Použije se Stripe verze 2015-10-16.


## Examples

### Example #1 
Vrátí tabulku událostí vytvořených po 1. listopadu 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Tabulka s požadovanými událostmi pro aktuální účet Stripe
```


### Example #2 
Vrátí tabulku všech skladových položek
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Tabulka všech skladových položek pro aktuální účet Stripe
```



