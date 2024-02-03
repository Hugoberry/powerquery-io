---
title: Binary.Compress
---

# Binary.Compress


## Description

Suglaudinama dvejetainė reikšmė naudojant glaudinimo tipą.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Naudojant pateiktą glaudinimo tipą suglaudinama dvejetainė reikšmė.  Šios iškvietos rezultatas yra suglaudinta įvesties kopija. Glaudinimo tipams priskiriami:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


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
