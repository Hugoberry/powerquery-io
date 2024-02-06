---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Retourneert een gesloten versie van het gegeven recordtype (of hetzelfde type indien dit reeds is gesloten).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Retourneert een gesloten versie van het gegeven <code>record</code> <code>type</code> (of hetzelfde type indien dit reeds is gesloten).


## Examples

### Example #1 
Een gesloten versie maken van &lt;code&gt;type [ A = getal,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
