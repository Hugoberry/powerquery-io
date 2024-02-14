---
title: Stripe.Method
---

# Stripe.Method


Nawiązuje połączenie z interfejsem API usługi Stripe


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Nawiązuje połączenie z interfejsem API usługi Stripe pod adresem https://api.stripe.com/v1/<code>method</code> z rekordem <code>additionalParameters</code> przekazanym jako parametry dodatkowe i listą <code>ColumnNames</code> oczekiwanych nazw kolumn. Stosowana wersja usługi Stripe to 2015-10-16.


## Examples

### Example #1 
Zwraca tabelę zawierającą zdarzenia utworzone po 1 listopada 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Tabela zawierająca określone zdarzenia powiązane z bieżącym kontem usługi Stripe
```


### Example #2 
Zwraca tabelę zawierającą wszystkie jednostki SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Tabela zawierająca wszystkie jednostki SKU powiązane z bieżącym kontem usługi Stripe
```



