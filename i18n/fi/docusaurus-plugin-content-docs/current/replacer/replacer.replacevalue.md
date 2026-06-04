---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Korvaa arvot annetun syötteen sisällä.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Korvaa arvon `old` alkuperäisessä kohteessa `value` arvolla `new`. Tätä korvaustoimintoa voi käyttää kohteissa `List.ReplaceValue` ja `Table.ReplaceValue`.


## Examples

### Example #1
Korvaa arvo 11 arvolla 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
