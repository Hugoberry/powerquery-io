---
title: Int8.From
---

# Int8.From


Tworzy 8-bitową liczbę całkowitą ze znakiem z podanej wartości.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Zwraca 8-bitową liczbę całkowitą ze znakiem `number` dla podanej wartości `value`. Jeśli podana wartość `value` to wartość `null`, funkcja `Int8.From` zwraca wartość `null`. Jeśli podana wartość `value` to `number` w zakresie 8-bitowej liczby całkowitej ze znakiem bez części ułamkowej, jest zwracana wartość `value`. Jeśli występuje część ułamkowa, liczba jest zaokrąglana przy użyciu podanego trybu zaokrąglania. Domyślny tryb zaokrąglania to `RoundingMode.ToEven`. Jeśli wartość `value` jest wartością innego typu, zostanie najpierw przekonwertowana na wartość `number` przy użyciu funkcji `Number.FromText`. Listę dostępnych trybów zaokrąglania można znaleźć w opisie funkcji `Number.Round`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”).


## Examples

### Example #1
Pobieranie 8-bitowej liczby całkowitej ze znakiem `number` dla wartości `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Pobieranie 8-bitowej liczby całkowitej ze znakiem `number` dla wartości `"4.5"` przy użyciu trybu zaokrąglania `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
