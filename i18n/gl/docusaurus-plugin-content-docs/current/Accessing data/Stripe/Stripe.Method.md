---
title: Stripe.Method
---

# Stripe.Method


## Description

Realiza unha chamada á API de Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Realiza unha chamada á API de Stripe en https://api.stripe.com/v1/<code>method</code>, co rexistro <code>additionalParameters</code> aprobado como parámetros adicionais e unha lista <code>ColumnNames</code> dos nomes de columna esperados. Está a usarse a versión 2015-10-16 de Stripe.


## Examples

### Example #1 
Devolve unha táboa cos eventos creados antes do 1 de novembro de 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Unha táboa cos eventos especificados da conta de Stripe actual
```


### Example #2 
Devolve unha táboa con todos os SKU.
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Unha táboa con todos os SKU da conta de Stripe actual
```



