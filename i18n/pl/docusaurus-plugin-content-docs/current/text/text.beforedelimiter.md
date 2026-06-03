---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Zwraca część elementu `text` przed określonym elementem `delimiter`. Opcjonalna liczba `index` wskazuje, które wystąpienie elementu `delimiter` ma zostać uwzględnione. Opcjonalna lista `index` wskazuje, które wystąpienie elementu `delimiter` ma zostać uwzględnione oraz czy indeksowanie ma być rozpoczynane od początku elementu wejściowego.


## Examples

### Example #1
Pobierz część ciągu „111-222-333” przed (pierwszym) łącznikiem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Pobierz część ciągu „111-222-333” przed drugim łącznikiem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Pobierz część ciągu „111-222-333” przed drugim łącznikiem od końca.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
