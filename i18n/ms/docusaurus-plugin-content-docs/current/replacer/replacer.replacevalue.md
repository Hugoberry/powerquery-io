---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Menggantikan nilai dalam input yang ditentukan.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Menggantikan nilai `old` dalam asal `value` dengan nilai `new`. Fungsi pengganti ini boleh digunakan dalam `List.ReplaceValue` dan `Table.ReplaceValue`.


## Examples

### Example #1
Gantikan nilai 11 dengan nilai 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
