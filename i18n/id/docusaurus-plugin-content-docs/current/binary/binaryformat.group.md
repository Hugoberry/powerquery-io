---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Menghasilkan format biner yang membaca sekelompok item.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Parameter sebagai berikut:

-   Parameter `binaryFormat` yang menetapkan format biner pada nilai kunci.
-   Parameter `group` memberikan informasi tentang grup item yang diketahui.
-   Parameter `extra` opsional dapat digunakan untuk menentukan fungsi yang akan menghasilkan nilai format biner untuk nilai yang disertai kunci apa pun yang tidak diperkirakan. Jika parameter `extra` tidak ditetapkan, maka kesalahan akan muncul jika terdapat nilai kunci yang tidak diperkirakan.

Parameter `group` akan menentukan daftar definisi item. Setiap definisi item adalah daftar, berisi 3-5 nilai, sebagai berikut:

-   Nilai kunci. Nilai kunci yang terkait dengan item. Nilai ini harus unik dalam sekumpulan item.
-   Format item. Format biner yang terkait dengan nilai item. Kondisi ini memungkinkan setiap item memiliki format berbeda.
-   Kemunculan item. Nilai `BinaryOccurrence.Type` untuk jumlah item yang diperkirakan muncul dalam grup. Item wajib yang tidak ada mengakibatkan kesalahan. Item duplikat wajib atau opsional akan ditangani seperti nilai kunci yang tidak diperkirakan.
-   Nilai item default (opsional). Jika nilai item default muncul dalam daftar definisi item dan tidak null, maka nilai item tersebut akan digunakan, bukan default. Default untuk item berulang atau opsional adalah null, dan default untuk nilai berulang adalah daftar kosong \{ \}.
-   Transformasi nilai item (opsional). Jika nilai item mentransformasi fungsi terdapat dalam daftar definisi item dan tidak null, maka nilai item tersebut akan dipanggil untuk mentransformasi nilai item sebelum dihasilkan. Fungsi transformasi hanya akan dipanggil jika item muncul dalam masukan (dan tidak akan dipanggil dengan nilai default).


## Examples

### Example #1
Berikut adalah asumsi nilai kunci yang merupakan byte tunggal, dengan 4 item yang diperkirakan dalam grup, kesemuanya memiliki byte data yang menyertai kunci. Item muncul dalam input sebagai berikut:

-   Kunci 1 diperlukan, dan tidak muncul dengan nilai 11.
-   Kunci 2 berulang, dan muncul dua kali dengan nilai 22, dan dihasilkan dalam nilai \{ 22, 22 \}.
-   Kunci 3 adalah opsional, tidak muncul, dan dihasilkan dalam nilai null.
-   Kunci 4 berulang, namun tidak muncul, dan dihasilkan dalam nilai \{ \}.
-   Kunci 5 bukan merupakan bagian dalam grup, namun muncul sekali dengan nilai 55. Fungsi ekstra dipanggil dengan nilai kunci 5, dan menghasilkan format yang terkait dengan nilai tersebut (BinaryFormat.Byte). Nilai 55 dibaca dan dibuang.
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2
Contoh berikut mengilustrasikan transformasi nilai item dan nilai item default. Item berulang dengan kunci 1 akan menjumlahkan daftar nilai yang terbaca menggunakan List.Sum. Item opsional dengan kunci 2 memiliki nilai default 123, bukan null.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
