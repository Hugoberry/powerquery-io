---
title: Decimal.From
---

# Decimal.From


Tworzy wartość dziesiętną dla podanej wartości.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca liczbę dziesiętną `number` dla podanej wartości `value`. Jeśli podana wartość `value` to wartość `null`, funkcja `Decimal.From` zwraca wartość `null`. Jeśli podana wartość `value` to `number` w zakresie liczby dziesiętnej, jest zwracana wartość `value` — w innych wypadkach jest zwracany błąd. Jeśli wartość `value` jest wartością innego typu, najpierw zostanie przekonwertowana na wartość `number` przy użyciu funkcji `Number.FromText`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”).


## Examples

### Example #1
Pobiera liczbę dziesiętną `number` dla wartości `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
