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

Gibt eine geschlossene Version des angegebenen <code>Datensatzes</code> <code>type</code> zurück (bzw. denselben Typ, wenn dieser bereits geschlossen ist).


## Examples

### Example #1 
Erstellen Sie eine geschlossene Version von &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
