---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Zwraca część elementu `text` po określonych elementach `startDelimiter` i `endDelimiter`. Opcjonalna liczba `startIndex` wskazuje, które wystąpienie elementu `startDelimiter` ma zostać uwzględnione. Opcjonalna lista `startIndex` wskazuje, które wystąpienie elementu `startDelimiter` ma zostać uwzględnione oraz czy indeksowanie ma być rozpoczynane od początku elementu wejściowego. Element `endIndex` jest podobny, ale w jego przypadku indeksowanie jest wykonywane względem elementu `startIndex`.


## Examples

### Example #1
Pobierz część ciągu „111 (222) 333 (444)” między (pierwszym) nawiasem otwierającym i (pierwszym) nawiasem zamykającym, który po nim następuje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Pobierz część ciągu „111 (222) 333 (444)” między drugim nawiasem otwierającym i pierwszym nawiasem zamykającym, który po nim następuje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Pobierz część ciągu „111 (222) 333 (444)” między drugim nawiasem otwierającym od końca i drugim nawiasem zamykającym, który po nim następuje.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
