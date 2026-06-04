---
title: Binary.Compress
---

# Binary.Compress


Zkomprimuje binární hodnotu pomocí zadaného typu komprese.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Zkomprimuje binární hodnotu pomocí zadaného typu komprese. Výsledkem tohoto volání je komprimovaná kopie vstupu. Mezi typy komprese patří:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Zkomprimuje binární hodnotu.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
