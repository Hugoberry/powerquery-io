---
title: Stripe.Method
---

# Stripe.Method


Fa una trucada a l'API de l'Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Fa una trucada a l'API de l'Stripe API al https://api.stripe.com/v1/`method`, amb el registre `additionalParameters` que es passa com a paràmetres addicionals i la llista `ColumnNames` de noms de columna esperats. S'utilitza la versió 2015-10-16 de l'Stripe.


## Examples

### Example #1
Retorna una taula amb incidències creades després de l'1 de novembre del 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Una taula amb incidències especificades del compte de l'Stripe actual
```


### Example #2
Retorna una taula amb tots els SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Una taula amb tots els SKU del compte de l'Stripe actual
```



