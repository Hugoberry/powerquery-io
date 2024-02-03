---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Menghasilkan format biner yang akan mentransformasi nilai yang dibaca format biner lain.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Menghasilkan format biner yang akan mentransformasi nilai yang dibaca format biner lain.  Parameter <code>binaryFormat</code> menentukan format biner yang akan digunakan untuk membaca nilai.  <code>function</code> digunakan dengan nilai yang dibaca, dan menghasilkan nilai yang ditransformasi.


## Examples

### Example #1 
Membaca byte dan menambahkan ke dalamnya.
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
