---
title: Csv.Document
---

# Csv.Document


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


## Remarks

Mengembalikan konten dokumen CSV sebagai tabel.

-   `columns` dapat berupa null, jumlah kolom, daftar nama kolom, jenis tabel, atau data opsi.
-   `delimiter` dapat berupa karakter tunggal, daftar karakter, atau nilai `""`, yang menunjukkan bahwa baris harus dipisahkan dengan karakter spasi kosong berurutan. Default: `","`.
-   Lihat `ExtraValues.Type` untuk mengetahui nilai `extraValues` yang didukung.
-   `encoding` menentukan jenis pengodean teks.

Jika data ditentukan untuk `columns` (serta `delimiter`, `extraValues`, dan `encoding` null), bidang data berikut dapat disediakan:

-   `Delimiter`: Pemisah kolom karakter tunggal. Default: `","`.
-   `Columns`: Dapat berupa null, jumlah kolom, daftar nama kolom, atau jenis tabel. Jika jumlah kolom lebih rendah daripada jumlah yang ditemukan dalam input, kolom tambahan akan diabaikan. Jika jumlah kolom lebih tinggi daripada jumlah yang ditemukan dalam input, kolom tambahan akan menjadi null. Jika tidak ditentukan, jumlah kolom akan ditentukan berdasarkan jumlah yang ditemukan dalam input.
-   `Encoding`: Pengodean teks file. Default: 65001 (UTF-8).
-   `CsvStyle`: Menentukan bagaimana tanda kutip ditangani.
    -   `CsvStyle.QuoteAfterDelimiter` (default): Tanda kutip dalam bidang hanya signifikan tepat setelah pembatas.
    -   `CsvStyle.QuoteAlways`: Tanda kutip dalam bidang selalu signifikan, di mana pun posisinya.
-   `QuoteStyle`: Menentukan bagaimana hentian baris dalam tanda kutip ditangani.
    -   `QuoteStyle.Csv` (default): Hentian baris dalam tanda kutip diperlakukan sebagai bagian dari data, bukan sebagai akhir dari baris saat ini.
    -   `QuoteStyle.None`: Semua hentian baris diperlakukan sebagai akhir dari baris saat ini, bahkan ketika hentian tersebut berada di dalam nilai yang diapit tanda kutip.
-   `IncludeByteOrderMark`: Nilai logis yang menunjukkan apakah akan menyertakan Tanda Urutan Byte (BOM) di awal output CSV. Bila diatur ke true, BOM ditulis (misalnya, UTF-8 BOM: `0xEF 0xBB 0xBF`); bila diatur ke false, tidak ada BOM yang disertakan. Opsi ini hanya berlaku dalam skenario output. Default-nya adalah `false`.
-   `ExtraValues`: Lihat `ExtraValues.Type` untuk mengetahui nilai yang didukung oleh ExtraValues.


## Examples

### Example #1
Memproses teks CSV dengan header kolom.
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


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
