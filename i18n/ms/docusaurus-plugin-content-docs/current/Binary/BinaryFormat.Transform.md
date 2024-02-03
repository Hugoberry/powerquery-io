---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Mengembalikan format perduaan yang akan mentransformasikan nilai yang dibaca oleh format perduaan lain.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Mengembalikan format perduaan yang akan mentransformasikan nilai yang dibaca oleh format perduaan lain.  Parameter <code>binaryFormat</code> menentukan format perduaan yang akan digunakan untuk membaca nilai.  <code>function</code> dijalankan dengan nilai dibaca dan mengembalikan nilai yang ditransformasikan.


## Examples

### Example #1 
Baca bait dan tambah satu padanya.
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
