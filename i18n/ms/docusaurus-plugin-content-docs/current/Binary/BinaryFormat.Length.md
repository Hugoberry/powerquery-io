---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Mengembalikan format perduaan yang mengehadkan amaun data yang boleh dibaca.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Mengembalikan format perduaan yang mengehadkan jumlah data yang boleh dibaca.  <code>BinaryFormat.List</code> dan <code>BinaryFormat.Binary</code> boleh digunakan untuk membaca sehingga hujung data.  <code>BinaryFormat.Length</code> boleh digunakan untuk mengehadkan bilangan bait yang dibaca.  Parameter <code>binaryFormat</code> menentukan format perduaan untuk dihadkan.  Parameter <code>length</code> menentukan bilangan bait untuk dibaca.  Parameter <code>length</code> mungkin sama ada nilai nombor atau nilai format perduaan yang menentukan format bagi nilai panjang yang muncul yang mendahului nilai yang sedang dibaca.


## Examples

### Example #1 
Hadkan bilangan bait yang dibaca kepada 2 semasa membaca senarai bait.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Hadkan bilangan bait yang dibaca semasa membaca senarai bait kepada nilai bait yang mendahului senarai.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
