---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Menghasilkan konten buku kerja Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Menghasilkan konten buku kerja Excel.    <ul>     <li> <code>useHeaders</code> dapat berupa null, nilai logis (true/false) mengindikasikan apakah baris pertama dari setiap tabel yang dihasilkan harus diperlakukan sebagai header, atau catatan opsi. Default: false.</li>     <li> <code>delayTypes</code> dapat berupa nilai null atau logis (true/false) yang mengindikasikan apakah kolom dari masing-masing tabel yang dihasilkan harus dibiarkan tidak diketikkan. Default: false.</li>    </ul>    Jika catatan ditentukan untuk <code>useHeaders</code> (dan <code>delayTypes</code> null), bidang catatan berikut dapat disediakan:    <ul>     <li> <code>UseHeaders</code>: Dapat berupa nilai null atau logis (true/false) yang mengindikasikan apakah baris pertama pada setiap tabel yang dihasilkan harus diperlakukan sebagai header. Default: false.</li>     <li> <code>DelayTypes</code>: Dapat berupa nilai null atau logis (true/false) yang mengindikasikan apakah kolom dari setiap tabel yang dihasilkan harus dibiarkan tidak diketikkan. Default: false.</li>     <li> <code>InferSheetDimensions</code>: Dapat berupa nilai null atau logis (true/false) yang menunjukkan apakah area lembar kerja yang berisi data harus disimpulkan dengan membaca lembar kerja itu sendiri, bukan dengan membaca metadata dimensi dari file. Hal ini dapat berguna jika dimensi metadata salah. Perhatikan bahwa opsi ini hanya didukung untuk file Open XML Excel, bukan untuk file Excel lawas. Default: false.</li>    </ul>    


## Examples

### Example #1 
Mengembalikan konten Lembar1 dari buku kerja Excel.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
