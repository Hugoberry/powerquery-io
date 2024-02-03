---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Vervangt waarden binnen de aangeleverde invoer.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Vervangt de waarde <code>old</code> in de oorspronkelijke <code>value</code> door de waarde <code>new</code>. Deze vervangingsfunctie kan worden gebruikt in <code>List.ReplaceValue</code> en <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
De waarde 11 vervangen door de waarde 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
