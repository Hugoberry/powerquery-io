---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

Mengembalikan format perduaan yang memilih format perduaan seterusnya berdasarkan pada nilai yang telah dibaca. Nilai format perduaan yang dihasilkan oleh fungsi ini berfungsi secara berperingkat:

-   Format perduaan yang ditentukan oleh parameter `binaryFormat` digunakan untuk membaca nilai.
-   Nilai yang dihantar ke fungsi pilih ditentukan oleh parameter `chooseFunction`.
-   Fungsi pilihan memeriksa nilai dan mengembalikan format perduaan kedua.
-   Format perduaan kedua digunakan untuk membaca nilai kedua.
-   Jika fungsi gabungan ditentukan, maka nilai pertama dan kedua dihantar kepada fungsi gabungan dan nilai yang terhasil dikembalikan.
-   Jika fungsi gabungan tidak ditentukan, nilai kedua dikembalikan.
-   Nilai kedua dikembalikan.

Parameter `type` pilihan menunjukkan jenis format perduaan yang akan dikembalikan oleh fungsi pilihan. Sama ada `type any`, `type list` atau `type binary` boleh ditentukan. Jika parameter `type` tidak ditentukan, maka `type any` digunakan. Jika `type list` atau `type binary` digunakan, maka sistem mungkin dapat mengembalikan nilai `binary` atau `list` penstriman berbanding nilai penimbalan, yang boleh mengurangkan amaun memori yang diperlukan untuk membaca format.


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
