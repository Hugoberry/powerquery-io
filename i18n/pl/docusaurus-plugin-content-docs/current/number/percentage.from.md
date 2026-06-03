---
title: Percentage.From
---

# Percentage.From


Zwraca wartość procentową danej wartości.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca wartość `percentage` dla danej wartości `value`. Jeśli dany element `value` ma wartość `null`, funkcja `Percentage.From` zwraca wartość `null`. Jeśli dany element `value` ma wartość `text` z symbolem procenta na końcu, zostanie zwrócona skonwertowana liczba dziesiętna. W innym przypadku wartość zostanie przekonwertowana na wartość `number` przy użyciu funkcji `Number.From`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”).


## Examples

### Example #1
Pobierz wartość `percentage` z `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
