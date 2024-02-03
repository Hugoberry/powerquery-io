---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Menghasilkan format biner yang akan membaca urutan item dan menghasilkan daftar.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Menghasilkan format biner, yang membaca urutan item dan menghasilkan <code>daftar</code>.  Parameter <code>binaryFormat</code> menentukan format biner dari tiap item.  Berikut adalah tiga cara untuk menentukan jumlah item yang dibaca: <ul><li>Jika <code>countOrCondition</code> tidak ditetapkan, format biner akan membaca hingga tidak ada lagi item.</li><li>Jika <code>countOrCondition</code> adalah angka, format biner akan membaca sebanyak item tersebut.</li><li>Jika <code>countOrCondition</code> adalah fungsi, fungsi tersebut akan digunakan untuk item yang dibaca.  Fungsi akan menghasilkan true untuk melanjutkan, dan false untuk berhenti membaca item.  Item akhir akan disertakan dalam daftar.</li><li>Jika <code>countOrCondition</code> adalah format biner, hitungan item diperkirakan untuk mendahului daftar, dan format yang ditetapkan akan digunakan untuk membaca hitungan.</li></ul>


## Examples

### Example #1 
Membaca byte hingga akhir data.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Membaca dua byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Membaca byte hingga nilai byte lebih besar dari atau sama dengan dua.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
