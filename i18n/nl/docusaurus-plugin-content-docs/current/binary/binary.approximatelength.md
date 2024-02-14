---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Retourneert de geschatte lengte van het binaire bestand.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Retourneert de geschatte lengte van <code>binary</code>of een fout als de gegevensbron geen geschatte lengte ondersteunt.


## Examples

### Example #1 
De geschatte lengte van de binaire waarde ophalen.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
