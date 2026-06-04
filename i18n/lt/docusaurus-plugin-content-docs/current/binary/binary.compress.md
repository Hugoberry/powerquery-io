---
title: Binary.Compress
---

# Binary.Compress


Suglaudinama dvejetainė reikšmė naudojant glaudinimo tipą.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Naudojant pateiktą glaudinimo tipą suglaudinama dvejetainė reikšmė. Šios iškvietos rezultatas yra suglaudinta įvesties kopija. Glaudinimo tipams priskiriami:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Glaudinkite dvejetainę reikšmę.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
