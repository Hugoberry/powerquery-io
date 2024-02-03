---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Returnerer den omtrentlige længde af den binære fil.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Returnerer den omtrentlige længde af <code>binary</code>eller en fejl, hvis datakilden ikke understøtter en omtrentlig længde.


## Examples

### Example #1 
Hent den omtrentlige længde af den binære værdi.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
