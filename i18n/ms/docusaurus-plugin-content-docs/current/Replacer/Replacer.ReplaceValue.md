---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Menggantikan nilai dalam input yang ditentukan.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Menggantikan nilai <code>old</code> dalam asal <code>value</code> dengan nilai <code>new</code>. Fungsi pengganti ini boleh digunakan dalam <code>List.ReplaceValue</code> dan <code>Table.ReplaceValue</code>.


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
