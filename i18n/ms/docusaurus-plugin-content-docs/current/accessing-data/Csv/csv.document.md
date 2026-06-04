---
title: Csv.Document
---

# Csv.Document


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


## Remarks

Mengembalikan kandungan dokumen CSV sebagai jadual.

-   `columns` boleh menjadi nol, bilangan lajur, senarai nama lajur, jenis jadual, atau rekod opsyen.
-   `delimiter` boleh menjadi aksara tunggal, senarai aksara, atau nilai `""`, yang menunjukkan baris harus dipisahkan oleh aksara ruang putih berturutan. Lalai: `","`.
-   Rujuk `ExtraValues.Type` untuk nilai yang disokong bagi `extraValues`.
-   `encoding` menentukan jenis pengekodan teks.

Jika rekod ditentukan untuk `columns` (dan `delimiter`, `extraValues`, dan `encoding` adalah nol), medan rekod berikut mungkin disediakan:

-   `Pembatas`: Pembatas lajur aksara tunggal. Lalai: `","`.
-   `Lajur`: Boleh menjadi nol, bilangan lajur, senarai nama lajur, atau jenis jadual. Jika bilangan lajur lebih rendah daripada bilangan yang ditemui dalam input, lajur tambahan akan diabaikan. Jika bilangan lajur lebih tinggi berbanding bilangan yang ditemui dalam input, lajur tambahan akan menjadi nol. Apabila tidak ditentukan, bilangan lajur akan ditentukan dengan perkara yang ditemui dalam input.
-   `Pengekodan`: Pengekodan teks fail. Lalai: 65001 (UTF-8).
-   `CsvStyle`: Menentukan cara petikan dikendalikan.
    -   `CsvStyle.QuoteAfterDelimiter` (lalai): Petikan dalam medan hanya signifikan serta merta selepas pembatas.
    -   `CsvStyle.QuoteAlways`: Petikan dalam medan sentiasa signifikan, tanpa mengira tempat ia muncul.
-   `QuoteStyle`: Menentukan cara pemisah garis yang dipetik dikendalikan.
    -   `QuoteStyle.Csv` (lalai): Pemisah garis yang dipetik dianggap sebagai sebahagian daripada data, bukan sebagai penghujung baris semasa.
    -   `QuoteStyle.None`: Semua pemisah garis dianggap sebagai penghujung baris semasa, walaupun apabila ia berlaku dalam nilai yang dipetik.
-   `IncludeByteOrderMark`: Nilai logik yang menunjukkan sama ada untuk memasukkan Tanda Pesanan Bait (BOM) pada permulaan output CSV. Apabila disetkan kepada benar, BOM ditulis (contohnya, UTF-8 BOM: `0xEF 0xBB 0xBF`); apabila disetkan kepada palsu, tiada BOM disertakan. Opsyen ini hanya terpakai dalam senario output. Lalai ialah `palsu`.
-   `ExtraValues`: Rujuk `ExtraValues.Type` untuk nilai sokongan ExtraValues.


## Examples

### Example #1
Proses teks CSV dengan pengepala lajur.
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
