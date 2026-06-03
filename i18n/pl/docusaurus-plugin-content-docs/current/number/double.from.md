---
title: Double.From
---

# Double.From


Tworzy liczbę o podwójnej precyzji dla podanej wartości.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca liczbę o podwójnej precyzji `number` dla podanej wartości `value`. Jeśli podana wartość `value` to wartość `null`, funkcja `Double.From` zwraca wartość `null`. Jeśli podana wartość `value` to `number` w zakresie liczby o podwójnej precyzji, jest zwracana wartość `value` — w innych wypadkach jest zwracany błąd. Jeśli wartość `value` jest wartością innego typu, najpierw zostanie przekonwertowana na wartość `number` przy użyciu funkcji `Number.FromText`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”).


## Examples

### Example #1
Pobiera wartość o podwójnej precyzji `number` dla wartości `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
