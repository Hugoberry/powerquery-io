---
title: Stripe.Method
---

# Stripe.Method


Ruft die Stripe-API auf.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Ruft die Stripe-API unter https://api.stripe.com/v1/<code>method</code> auf, wobei der Datensatz <code>additionalParameters</code> als zusätzlicher Parameter und die Liste <code>ColumnNames</code> mit erwarteten Spaltennamen übergeben wird. Es wird Stripe-Version 2015-10-16 verwendet.


## Examples

### Example #1 
Gibt eine Tabelle mit Ereignissen zurück, die nach dem 1. November 2015 erstellt wurden.
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Eine Tabelle mit den angegebenen Ereignissen für das aktuelle Stripe-Konto.
```


### Example #2 
Gibt eine Tabelle mit allen SKUs zurück.
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Eine Tabelle mit sämtlichen SKUs für das aktuelle Stripe-Konto.
```



