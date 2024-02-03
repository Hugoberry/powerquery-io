---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Sostituisce i valori nell&#39;input specificato.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Sostituisce il valore <code>old</code> nell'originale <code>value</code> con il valore <code>new</code>. Questa funzione di sostituzione può essere utilizzata in <code>List.ReplaceValue</code> e <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Sostituire il valore 11 con il valore 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
