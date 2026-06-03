---
title: List.ReplaceValue
---

# List.ReplaceValue


Ricerca in un elenco il valore specificato e lo sostituisce.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Ricerca nell'elenco di valori `list` il valore `oldValue` e sostituisce ogni occorrenza con il valore di sostituzione `newValue`.


## Examples

### Example #1
Sostituire tutti i valori "a" nell'elenco \{"a", "B", "a", "a"\} con "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
