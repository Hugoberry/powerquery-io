---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Puskuroi binaariarvon muistiin.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Puskuroi binaariarvon muistiin. Tämän kutsun tulos on vakaa binaariarvo. Sillä on siis selvitettävissä oleva pituus ja tavujärjestys.


## Examples

### Example #1 
Luo vakaa versio binaariarvosta.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
