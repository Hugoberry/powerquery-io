---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Mengembalikan format perduaan yang membaca jujukan item dan mengembalikan senarai.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Mengembalikan format perduaan yang membaca jujukan item dan mengembalikan <code>list</code>.  Parameter <code>binaryFormat</code> menentukan format perduaan bagi setiap item.  Terdapat tiga cara untuk menentukan bilangan item yang dibaca: <ul><li>Jika <code>countOrCondition</code> tidak ditentukan, maka format perduaan akan membaca sehingga tiada lagi item.</li><li>Jika <code>countOrCondition</code> ialah nombor, maka format perduaan akan membaca bilangan item tersebut.</li><li>Jika <code>countOrCondition</code> ialah fungsi, maka fungsi tersebut akan dijalankan untuk setiap item yang dibaca.  Fungsi mengembalikan benar untuk meneruskan dan palsu untuk berhenti membaca item.  Item terakhir disertakan dalam senarai.</li><li>Jika <code>countOrCondition</code> ialah format perduaan, maka kiraan item dijangka mendahului senarai dan format yang ditentukan digunakan untuk membaca kiraan.</li></ul>


## Examples

### Example #1 
Baca bait sehingga hujung data.
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
Baca dua bait.
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
Baca bait sehingga nilai bait adalah lebih besar daripada atau sama dengan dua.
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
