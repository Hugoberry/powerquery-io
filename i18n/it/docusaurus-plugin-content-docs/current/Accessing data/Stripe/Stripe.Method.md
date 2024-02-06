---
title: Stripe.Method
---

# Stripe.Method


Effettua una chiamata all&#39;API Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Effettua una chiamata all'API Stripe all'indirizzo https://api.stripe.com/v1/<code>method</code>, con il record <code>additionalParameters</code> passato come parametri facoltativi e l'elenco <code>ColumnNames</code> dei nomi di colonna previsti. Versione di Stripe usata: 2015-10-16.


## Examples

### Example #1 
Restituisce una tabella contenente gli eventi creati dopo il 1° novembre 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Tabella contenente gli eventi specificati per l'account Stripe corrente
```


### Example #2 
Restituisce una tabella con tutti gli SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Tabella contenente tutti gli SKU per l'account Stripe corrente
```



