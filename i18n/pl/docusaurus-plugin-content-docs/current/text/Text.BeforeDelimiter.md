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

Zwraca część elementu <code>text</code> przed określonym elementem <code>delimiter</code>.    Opcjonalna liczba <code>index</code> wskazuje, które wystąpienie elementu <code>delimiter</code> ma zostać uwzględnione.    Opcjonalna lista <code>index</code> wskazuje, które wystąpienie elementu <code>delimiter</code> ma zostać uwzględnione oraz czy indeksowanie ma być rozpoczynane od początku elementu wejściowego.


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
