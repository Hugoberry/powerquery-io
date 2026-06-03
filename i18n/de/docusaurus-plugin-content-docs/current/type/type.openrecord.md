---
title: Type.OpenRecord
---

# Type.OpenRecord


Gibt eine geöffnete Version des angegebenen Datensatztyps zurück (bzw. denselben Typ, wenn dieser bereits geöffnet ist).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Gibt eine geöffnete Version des angegebenen `Datensatzes` `type` zurück (bzw. denselben Typ, wenn dieser bereits geöffnet ist).


## Examples

### Example #1
Erstellen Sie eine geöffnete Version von `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
