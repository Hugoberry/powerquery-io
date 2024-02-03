---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Başka bir ikili biçimi tarafından okunan değerleri dönüştüren bir ikili biçimini döndürür.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Başka bir ikili biçimi tarafından okunan değerleri dönüştüren bir ikili biçimini döndürür.  <code>binaryFormat</code> parametresi değeri okumak için kullanılacak ikili biçimi belirtir.  <code>function</code> okunan değerle çağrılır ve dönüştürülen değeri döndürür.


## Examples

### Example #1 
Baytı okur ve ona bir ekler.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
