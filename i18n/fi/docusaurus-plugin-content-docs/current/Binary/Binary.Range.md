---
title: Binary.Range
---

# Binary.Range


## Description

Palauttaa binaariarvon alijoukon siirtymästä alkaen.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Palauttaa binaariarvon alijoukon siirtymästä <code>binary</code> alkaen. Valinnainen parametri <code>offset</code> asettaa alijoukon enimmäispituuden.


## Examples

### Example #1 
Palauttaa binaariarvon alijoukon siirtymästä 6 alkaen.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Palauttaa pituuden 2 alijoukon binaariarvon siirtymästä 6.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
