---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Mengembalikan format perduaan yang membaca sekumpulan item.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

Parameter adalah seperti berikut:<ul><li>Parameter <code>binaryFormat</code> menentukan format perduaan bagi nilai kunci.</li><li>Parameter <code>group</code> memberi maklumat mengenai sekumpulan item yang diketahui.</li><li>Parameter <code>extra</code> opsyenal yang boleh digunakan untuk menentukan fungsi yang akan mengembalikan nilai format perduaan untuk nilai selepas sebarang kunci yang tidak dijangka.  Jika parameter <code>extra</code> tidak ditentukan, maka ralat akan dipaparkan jika terdapat nilai kunci yang tidak dijangka.</li></ul>Parameter <code>group</code> menentukan takrifan senarai item.  Definisi setiap item ialah senarai, yang mengandungi 3-5 nilai, seperti berikut:<ul><li>Nilai kunci.  Nilai kunci yang berkaitan dengan item.  Ini mestilah unik dalam set item.</li><li>Format item.  Format perduaan yang berkaitan dengan nilai item.  Ini membolehkan setiap item mempunyai format berlainan. </li><li>Kejadian item.  Nilai <code>BinaryOccurrence.Type</code> untuk bilangan kali item dijangka akan muncul dalam kumpulan.   Item yang diperlukan yang tidak hadir akan menyebabkan ralat.  Item pendua yang diperlukan atau opsyenal dikendalikan seperti nilai kunci tidak dijangka.</li><li>Nilai item lalai (opsyenal).  Jika nilai item lalai muncul dalam senarai definisi item dan bukan nol, maka ia akan digunakan sebagai ganti kepada lalai.  Lalai untuk item berulang atau opsyenal ialah nol dan lalai untuk nilai berulang ialah senarai kosong \{ }.</li><li>Transformasi nilai item (opsyenal).   Jika fungsi transformasi nilai item hadir dalam senarai definisi item dan bukan nol, maka ia akan dipanggil untuk mentransformasikan nilai item sebelum ia dikembalikan.  Fungsi transformasi hanya dipanggil jika item muncul dalam input (ia tidak akan dipanggil dengan nilai lalai). </li></ul>


## Examples

### Example #1 
Yang berikut mengambil nilai kunci dengan bait tunggal, dengan 4 item dijangka dalam kumpulan, kesemuanya mempunyai satu bait data selepas kunci.  Item muncul dalam input seperti berikut:&lt;ul&gt;&lt;li&gt;Kunci 1 diperlukan dan muncul dengan nilai 11.&lt;/li&gt;&lt;li&gt;Kunci 2 berulang dan muncul dua kali dengan nilai 22 dan menghasilkan nilai \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Kunci 3 ialah pilihan dan tidak muncul dan menghasilkan nilai nol.&lt;/li&gt;&lt;li&gt;Kunci 4 berulang, tetapi tidak muncul dan menghasilkan nilai \{ }.&lt;/li&gt;&lt;li&gt;Kunci 5 bukan sebahagian daripada kumpulan, tetapi muncul sekali dengan nilai 55.  Fungsi tambahan dipanggil dengan nilai kunci 5 dan mengembalikan format yang sepadan dengan nilai tersebut (BinaryFormat.Byte).  Nilai 55 dibaca dan dibuang.&lt;/li&gt;&lt;/ul&gt;
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
Contoh berikut menunjukkan transformasi nilai item dan nilai item lalai.   Item berulang dengan kunci 1 menjumlahkan senarai nilai yang dibaca menggunakan List.Sum.  Item pilihan dengan kunci 2 mempunyai nilai lalai 123 berbanding nol.
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
