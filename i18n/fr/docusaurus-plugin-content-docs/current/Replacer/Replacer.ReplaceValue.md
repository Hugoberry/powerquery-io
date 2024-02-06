---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Remplace les valeurs dans l&#39;entrée fournie.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Remplace la valeur <code>old</code> dans le <code>value</code> d'origine par la valeur <code>new</code>. Cette fonction de remplacement peut être utilisée dans <code>List.ReplaceValue</code> et <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Remplace la valeur 11 par la valeur 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
