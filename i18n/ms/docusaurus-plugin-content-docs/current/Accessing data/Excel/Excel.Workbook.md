---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Mengembalikan kandungan buku kerja Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Mengembalikan kandungan buku kerja Excel.    <ul>     <li> <code>useHeaders</code> boleh menjadi nol, nilai logik (benar/salah) yang menunjukkan sama ada baris pertama bagi setiap jadual yang dikembalikan perlu dianggap sebagai pengepala, atau rekod pilihan. Lalai: salah.</li>     <li> <code>delayTypes</code> boleh menjadi nilai nol atau logik (benar/salah) yang menunjukkan sama ada lajur bagi setiap jadual yang dikembalikan perlu dibiarkan tidak bertaip. Lalai: salah.</li>    </ul>    Jika laporan ditentukan untuk <code>useHeaders</code> (dan <code>delayTypes</code> adalah nol), medan rekod berikut mungkin diberikan:    <ul>     <li> <code>UseHeaders</code>: Boleh menjadi nilai nol atau logik (benar/salah) yang menunjukkan sama ada baris pertama bagi setiap jadual yang dikembalikan perlu dianggap sebagai pengepala. Lalai: salah.</li>     <li> <code>DelayTypes</code>: Boleh menjadi nilai nol atau logik (benar/salah) yang menunjukkan sama ada lajur bagi setiap jadual yang dikembalikan perlu dibiarkan tanpa ditaip. Lalai: salah.</li>     <li> <code>InferSheetDimensions</code>: Boleh menjadi nilai nol atau logik (benar/salah) yang menunjukkan sama ada kawasan helaian kerja yang mengandungi data perlu disimpulkan dengan membaca lembaran kerja itu sendiri, berbanding dengan membaca metadata dimensi daripada fail. Perkara ini berguna dalam kes yang mana metadata dimensi adalah tidak betul. Ambil perhatian bahawa pilihan ini hanya disokong untuk fail Open XML Excel, bukan untuk fail Excel legasi. Lalai: salah.</li>    </ul>    


## Examples

### Example #1 
Kembalikan kandungan Lembaran1 daripada buku kerja Excel.
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
