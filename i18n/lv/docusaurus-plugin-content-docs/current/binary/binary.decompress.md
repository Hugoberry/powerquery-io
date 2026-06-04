---
title: Binary.Decompress
---

# Binary.Decompress


Atspiež bināro vērtību, izmantojot norādīto saspiešanas tipu.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Atspiež bināro vērtību, izmantojot norādīto saspiešanas tipu. Veicot šo izsaukumu, tiek iegūta atspiesta ievadīto datu kopija. Ir pieejami tālāk norādītie saspiešanas tipi.

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Atspiest bināro vērtību.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
