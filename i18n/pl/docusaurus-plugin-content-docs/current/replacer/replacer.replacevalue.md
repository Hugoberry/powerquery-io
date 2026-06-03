---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Zamienia wartości na podane dane wejściowe.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Zamienia wartość `old` w oryginalnej wartości `value` na wartość `new`. Tej funkcji zamieniającej można używać w funkcjach `List.ReplaceValue` i `Table.ReplaceValue`.


## Examples

### Example #1
Zamień wartość 11 na wartość 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
