---
title: Single.From
---

# Single.From


Tworzy wartość o pojedynczej precyzji z podanej wartości.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca liczbę o pojedynczej precyzji `number` dla podanej wartości `value`. Jeśli podana wartość `value` to wartość `null`, funkcja `Single.From` zwraca wartość `null`. Jeśli podana wartość `value` to `number` w zakresie liczby o pojedynczej precyzji, jest zwracana wartość `value` — w przeciwnym wypadku jest zwracany błąd. Jeśli wartość `value` jest wartością innego typu, najpierw zostanie przekonwertowana na wartość `number` przy użyciu funkcji `Number.FromText`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”).


## Examples

### Example #1
Pobieranie wartości o pojedynczej precyzji `number` dla wartości `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
