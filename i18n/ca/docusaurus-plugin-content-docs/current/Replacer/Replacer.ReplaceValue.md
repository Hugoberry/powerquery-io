---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Substitueix els valors dins de l&#39;entrada proporcionada.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Substitueix el valor <code>old</code> del <code>value</code> original pel valor <code>new</code>. Aquesta funció de substitució es pot utilitzar a <code>List.ReplaceValue</code> i <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Substitueix el valor 11 pel valor 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
