---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Remplace les valeurs dans l'entrée fournie.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Remplace la valeur `old` dans le `value` d'origine par la valeur `new`. Cette fonction de remplacement peut être utilisée dans `List.ReplaceValue` et `Table.ReplaceValue`.


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
