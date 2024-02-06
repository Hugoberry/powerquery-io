---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Returnerar binärfilens ungefärliga längd.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Returnerar den ungefärliga längden på <code>binary</code>eller ett fel om datakällan inte stöder en ungefärlig längd.


## Examples

### Example #1 
Hämta den ungefärliga längden på binärvärdet.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
