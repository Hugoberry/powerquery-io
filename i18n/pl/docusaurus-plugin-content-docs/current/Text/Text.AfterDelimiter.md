---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Zwraca część elementu <code>text</code> po określonym elemencie <code>delimiter</code>.    Opcjonalna liczba <code>index</code> wskazuje, które wystąpienie elementu <code>delimiter</code> ma zostać uwzględnione.    Opcjonalna lista <code>index</code> wskazuje, które wystąpienie elementu <code>delimiter</code> ma zostać uwzględnione oraz czy indeksowanie ma być rozpoczynane od początku elementu wejściowego.


## Examples

### Example #1 
Pobierz część ciągu „111-222-333” po (pierwszym) łączniku.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Pobierz część ciągu „111-222-333” po drugim łączniku.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Pobierz część ciągu „111-222-333” po drugim łączniku od końca.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
