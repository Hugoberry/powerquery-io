---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Înlocuieşte valorile cu valorile introduse furnizate.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Înlocuieşte valoarea <code>old</code> din <code>value</code> original cu valoarea <code>new</code>. Această funcţie de înlocuire poate fi utilizată în <code>List.ReplaceValue</code> şi în <code>Table.ReplaceValue</code>.


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
