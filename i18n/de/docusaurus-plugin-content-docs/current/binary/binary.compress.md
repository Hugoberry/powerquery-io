---
title: Binary.Compress
---

# Binary.Compress


Komprimiert einen binären Wert mithilfe des angegebenen Komprimierungstyps.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Komprimieren eines binären Werts mithilfe des angegebenen Komprimierungstyps. Das Ergebnis dieses Aufrufs ist eine komprimierte Kopie der Eingabe. Unter anderem sind die folgenden Komprimierungstypen verfügbar:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Komprimieren des binären Werts.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
