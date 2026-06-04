---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Înlocuieşte valorile cu valorile introduse furnizate.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Înlocuieşte valoarea `old` din `value` original cu valoarea `new`. Această funcţie de înlocuire poate fi utilizată în `List.ReplaceValue` şi în `Table.ReplaceValue`.


## Examples

### Example #1
Înlocuiţi valoarea 11 cu valoarea 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
