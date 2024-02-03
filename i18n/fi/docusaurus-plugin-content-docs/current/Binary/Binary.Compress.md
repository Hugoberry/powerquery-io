---
title: Binary.Compress
---

# Binary.Compress


## Description

Pakkaa binaariarvon käyttäen annettua pakkaustyyppiä.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Pakkaa binaariarvon käyttäen annettua pakkaustyyppiä. Tämän kutsun tulos on syötteen pakattu kopio. Pakkaustyyppejä ovat esimerkiksi seuraavat:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Pakkaa binaariarvon.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
