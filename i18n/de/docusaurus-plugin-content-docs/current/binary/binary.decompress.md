---
title: Binary.Decompress
---

# Binary.Decompress


Dekomprimiert einen Binärwert mithilfe des angegebenen Komprimierungstyps.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Dekomprimiert einen Binärwert mithilfe des angegebenen Komprimierungstyps. Das Ergebnis dieses Aufrufs ist eine dekomprimierte Kopie der Eingabe. Unter anderem sind folgende Komprimierungstypen verfügbar:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Dekomprimiert den Binärwert.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
