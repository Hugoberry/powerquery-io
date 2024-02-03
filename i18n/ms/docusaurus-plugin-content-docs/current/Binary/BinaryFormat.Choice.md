---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Mengembalikan format perduaan yang memilih format perduaan seterusnya berdasarkan pada nilai yang telah dibaca.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Mengembalikan format perduaan yang memilih format perduaan seterusnya berdasarkan pada nilai yang telah dibaca.  Nilai format perduaan yang dihasilkan oleh fungsi ini berfungsi secara berperingkat:<ul><li>Format perduaan yang ditentukan oleh parameter <code>binaryFormat</code> digunakan untuk membaca nilai.</li><li>Nilai yang dihantar ke fungsi pilih ditentukan oleh parameter <code>chooseFunction</code>.</li><li>Fungsi pilihan memeriksa nilai dan mengembalikan format perduaan kedua.</li><li>Format perduaan kedua digunakan untuk membaca nilai kedua.</li><li>Jika fungsi gabungan ditentukan, maka nilai pertama dan kedua dihantar kepada fungsi gabungan dan nilai yang terhasil dikembalikan.</li><li>Jika fungsi gabungan tidak ditentukan, nilai kedua dikembalikan.</li><li>Nilai kedua dikembalikan.</li></ul>Parameter <code>type</code> pilihan menunjukkan jenis format perduaan yang akan dikembalikan oleh fungsi pilihan.  Sama ada <code>type any</code>, <code>type list</code> atau <code>type binary</code> boleh ditentukan.  Jika parameter <code>type</code> tidak ditentukan, maka <code>type any</code> digunakan.   Jika <code>type list</code> atau <code>type binary</code> digunakan, maka sistem mungkin dapat mengembalikan nilai <code>binary</code> atau <code>list</code> penstriman berbanding nilai penimbalan, yang boleh mengurangkan amaun memori yang diperlukan untuk membaca format.


## Examples

### Example #1 
Baca senarai bait yang mana bilangan elemen ditentukan oleh bait pertama.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
Baca senarai bait yang mana bilangan elemen ditentukan oleh bait pertama dan kekalkan bacaan bait pertama.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
Baca senarai bait yang mana bilangan elemen ditentukan oleh bait pertama menggunakan senarai penstriman.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
