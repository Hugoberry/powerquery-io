---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Substitúe os valores dentro da entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Substitúe o valor <code>old</code> dentro do <code>value</code> orixinal co valor <code>new</code>. Esta función de substitución pódese utilizar en <code>List.ReplaceValue</code> e <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Substituír o valor 11 co valor 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
