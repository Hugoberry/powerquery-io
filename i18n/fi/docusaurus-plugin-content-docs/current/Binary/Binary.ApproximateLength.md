---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Palauttaa binaariarvon arvioidun pituuden.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Palauttaa <code>binary</code>:n likimääräisen pituuden tai virheen, jos tietolähde ei tue arvioitua pituutta.


## Examples

### Example #1 
Hae binaariarvon arvioitu pituus.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
