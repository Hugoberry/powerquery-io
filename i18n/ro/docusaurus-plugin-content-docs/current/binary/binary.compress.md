---
title: Binary.Compress
---

# Binary.Compress


Comprimă o valoare binară utilizând tipul de comprimare specificat.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Comprimă o valoare binară utilizând tipul de comprimare dat. Rezultatul acestui apel este o copie comprimată a intrării. Tipurile de comprimare cuprind:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Comprimă valoarea binară.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
