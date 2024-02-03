---
title: Csv.Document
---

# Csv.Document


## Description

Mengembalikan kandungan dokumen CSV sebagai jadual.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Mengembalikan kandungan dokumen CSV sebagai jadual.    <ul>      <li>        <code>columns</code> boleh menjadi nol, bilangan lajur, senarai nama lajur, jenis jadual, atau rekod opsyen.      </li>      <li>        <code>delimiter</code> boleh menjadi aksara tunggal, senarai aksara, atau nilai <code>""</code>, yang menunjukkan baris perlu dipisahkan dengan aksara putih yang berturutan. Lalai: <code>","</code>.      </li>      <li>        Rujuk <code>ExtraValues.Type</code> untuk nilai sokongan bagi <code>extraValues</code>.      </li>      <li>        <code>encoding</code> menentukan jenis pengekodan teks.      </li>    </ul>    Jika rekod ditentukan untuk <code>columns</code> (dan <code>delimiter</code>, <code>extraValues</code>, dan <code>encoding</code> adalah nol), medan rekod berikut mungkin diberikan:    <ul>      <li>        <code>Pembatas</code>: Pembatas lajur. Lalai: <code>","</code>.      </li>      <li>        <code>Lajur</code>: Boleh menjadi nol, bilangan lajur, senarai nama lajur, atau jenis jadual. Jika bilangan lajur lebih rendah daripada bilangan yang ditemui dalam input, lajur tambahan akan diabaikan. Jika bilangan lajur lebih tinggi berbanding bilangan yang ditemui dalam input, lajur tambahan akan menjadi nol. Apabila tidak ditentukan, bilangan lajur akan ditentukan dengan perkara yang ditemui dalam input.      </li>      <li>        <code>Pengekodan</code>: Pengekodan teks bagi fail. Lalai: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Menentukan cara petikan dikendalikan.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (default): Sebut harga dalam medan hanya ketara serta merta berikutan pembatas.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Sebut harga dalam medan sentiasa ketara, tanpa mengira tempat ia muncul.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Menentukan cara garis pemisah yang dipetik dikendalikan.        <ul>          <li>            <code>QuoteStyle.Csv</code> (default): Semua garis pemisah dianggap sebagai sebahagian daripada data, bukan sebagai penghujung baris semasa.          </li>          <li>            <code>QuoteStyle.Csv</code>: Semua garis pemisah dianggap sebagai penghujung baris semasa, walaupun apabila ia berlaku di dalam nilai yang disebut.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Proses teks CSV dengan pengepala lajur
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
