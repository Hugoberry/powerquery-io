---
title: Stripe.Method
---

# Stripe.Method


Effectue un appel à l&#39;API Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Effectue un appel à l'API Stripe de https://api.stripe.com/v1/<code>method</code>, avec des <code>additionalParameters</code> d'enregistrement passés comme paramètres supplémentaires et les <code>ColumnNames</code> de la liste des noms de colonnes attendus. Stripe version 2015-10-16 est utilisé.


## Examples

### Example #1 
Retourne une table avec les événements créés après le 1er novembre 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Table avec les événements spécifiés pour le compte Stripe actif
```


### Example #2 
Retourne une table avec toutes les références (SKU)
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Table avec toutes les références (SKU) pour le compte Stripe actif
```



