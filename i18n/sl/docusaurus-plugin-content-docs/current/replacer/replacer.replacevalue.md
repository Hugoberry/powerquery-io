---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Zamenja vrednosti v podanem vnosu.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Zamenja vrednost `old` v izvirnem `value` z vrednostjo `new`. To funkcijo zamenjevalnika lahko uporabite v `List.ReplaceValue` in `Table.ReplaceValue`.


## Examples

### Example #1
Zamenjajte vrednost 11 z vrednostjo 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
