---
title: Stripe.Contents
---

# Stripe.Contents


Nawiązuje połączenie z interfejsem API usługi Stripe z opcją ograniczenia liczby wykonywanych połączeń z interfejsem API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Nawiązuje połączenie z interfejsem API usługi Stripe pod adresem https://api.stripe.com/v1/<code>method</code> z opcjonalnym rekordem <code>query</code> przekazanym jako parametry dodatkowe i opcjonalną wartością <code>pageLimit</code> jako limitem liczby żądań interfejsu API. Najpierw zwracane są najnowsze dane. Jeśli wartość <code>pageLimit</code> nie zostanie określona, zwracane są wszystkie dane. Stosowana wersja usługi Stripe to 2015-10-16.


## Examples

### Example #1 
Zwraca wszystkie dane opłat
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Tabela zawierająca dane wszystkich opłat powiązanych z bieżącym kontem usługi Stripe
```


### Example #2 
Zwraca jedną stronę danych opłat
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Tabela zawierająca dane najnowszych opłat powiązanych z bieżącym kontem usługi Stripe
```



