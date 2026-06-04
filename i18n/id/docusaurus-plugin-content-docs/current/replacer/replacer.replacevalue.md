---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Mengganti nilai dalam input yang diberikan.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Mengganti nilai `old` dalam `value` asli dengan nilai `new`. Fungsi pengganti ini dapat digunakan dalam `List.ReplaceValue` dan `Table.ReplaceValue`.


## Examples

### Example #1
Mengganti nilai 11 dengan nilai 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
