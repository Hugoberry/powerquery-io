---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Gibt die ungefähre Länge der Binärdatei zurück.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Gibt die ungefähre Länge von <code>binary</code> oder einen Fehler zurück, wenn die Datenquelle keine ungefähre Länge unterstützt.


## Examples

### Example #1 
Ruft die ungefähre Länge des binären Werts ab.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
