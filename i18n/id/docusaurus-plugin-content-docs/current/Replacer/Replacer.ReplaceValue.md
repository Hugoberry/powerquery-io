---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Mengganti nilai dalam input yang diberikan.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Mengganti nilai <code>old</code> dalam <code>value</code> asli dengan nilai <code>new</code>. Fungsi pengganti ini dapat digunakan dalam <code>List.ReplaceValue</code> dan <code>Table.ReplaceValue</code>.


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
