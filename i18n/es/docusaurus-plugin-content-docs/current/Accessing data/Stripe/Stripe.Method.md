---
title: Stripe.Method
---

# Stripe.Method


## Description

Hace una llamada a la API de Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Hace una llamada a la API de Stripe en https://api.stripe.com/v1/<code>method</code>, con el registro <code>additionalParameters</code> que se pasa como parámetros adicionales y la lista <code>ColumnNames</code> de nombres de columna esperados. Se usa Stripe versión 2015-10-16.


## Examples

### Example #1 
Devuelve una tabla con los eventos creados después del 1 de noviembre de 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Una tabla con los eventos especificados de la cuenta de Stripe actual
```


### Example #2 
Devuelve una tabla con todas las SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Una tabla con todas las SKU de la cuenta de Stripe actual
```



