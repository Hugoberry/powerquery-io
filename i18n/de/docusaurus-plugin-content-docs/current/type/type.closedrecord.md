---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Gibt eine geschlossene Version des angegebenen Datensatztyps zurück (bzw. denselben Typ, wenn dieser bereits geschlossen ist).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Gibt eine geschlossene Version des angegebenen `Datensatzes` `type` zurück (bzw. denselben Typ, wenn dieser bereits geschlossen ist).


## Examples

### Example #1
Erstellt eine geschlossene Version von `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
