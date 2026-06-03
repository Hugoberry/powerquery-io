---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Sostituisce i valori nell'input specificato.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Sostituisce il valore `old` nell'originale `value` con il valore `new`. Questa funzione di sostituzione può essere utilizzata in `List.ReplaceValue` e `Table.ReplaceValue`.


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
