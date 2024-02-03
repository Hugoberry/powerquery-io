---
title: Csv.Document
---

# Csv.Document


## Description

Menghasilkan konten dokumen CSV sebagai tabel.


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

Menghasilkan konten dokumen CSV sebagai tabel.    <ul>      <li>        <code>columns</code> dapat berupa null, jumlah kolom, daftar nama kolom, jenis tabel, atau catatan opsi.      </li>      <li>        <code>delimiter</code> dapat berupa karakter tunggal, daftar karakter, atau nilai <code>""</code>, yang menunjukkan baris harus dipisahkan dengan karakter spasi kosong yang berurutan. Default: <code>","</code>.      </li>      <li>        Lihat <code>ExtraValues.Type</code> untuk mengetahui nilai <code>extraValues</code> yang didukung.      </li>      <li>        <code>encoding</code> menentukan jenis pengodean teks.      </li>    </ul>    Jika catatan ditentukan untuk <code>columns</code> (serta <code>delimiter</code>, <code>extraValues</code>, dan <code>encoding</code> adalah null), bidang catatan berikut dapat diberikan:    <ul>      <li>        <code>Delimiter</code>: Pemisah kolom. Default: <code>","</code>.      </li>      <li>        <code>Columns</code>: Dapat berupa null, jumlah kolom, daftar nama kolom, atau jenis tabel. Jika jumlah kolom lebih rendah daripada jumlah yang ditemukan di input, kolom tambahan akan diabaikan. Jika jumlah kolom lebih tinggi daripada jumlah yang ditemukan di input, kolom tambahan akan menjadi null. Bila tidak ditentukan, jumlah kolom akan ditentukan oleh jumlah yang ditemukan di input.      </li>      <li>        <code>Encoding</code>: Pengodean teks file. Default: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Menentukan bagaimana tanda kutip ditangani.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (default): Tanda kutip dalam bidang hanya penting jika muncul tepat setelah pemisah.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Tanda kutip dalam bidang selalu penting, di mana pun tanda kutip tersebut muncul.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Menentukan bagaimana hentian baris yang diapit tanda kutip ditangani.        <ul>          <li>            <code>QuoteStyle.Csv</code> (default): Hentian baris yang diapit tanda kutip diperlakukan sebagai bagian dari data, bukan sebagai akhir baris saat ini.          </li>          <li>            <code>QuoteStyle.None</code>: Semua hentian baris diperlakukan sebagai akhir baris saat ini, bahkan ketika hentian baris tersebut muncul di dalam nilai yang diapit tanda kutip.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Proses teks CSV dengan judul kolom
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
