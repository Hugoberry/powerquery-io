---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Menambahkan kolom baru berisi nilai representatif yang diperoleh oleh nilai pengelompokan fuzzy dari kolom yang ditentukan dalam tabel.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Menambahkan kolom baru `newColumnName` ke `table` dengan nilai representatif `columnName`. Perwakilan diperoleh dengan nilai yang sama secara fuzzy dalam `columnName`, untuk setiap baris.

Rangkaian opsional `options` dapat disertakan untuk menentukan cara membandingkan kolom kunci. Opsi meliputi:

-   `Culture` : Mengizinkan pengelompokan data berdasarkan aturan khusus kultur. Ini dapat berupa nama kultur yang valid. Misalnya, opsi kultur "ja-JP" mengelompokkan catatan berdasarkan kultur Jepang. Nilai defaultnya adalah "", yang grupnya berdasarkan kultur bahasa Inggris invarian.
-   `IgnoreCase` : Nilai logika (true/false) yang memungkinkan pengelompokan kunci tidak peka huruf besar/kecil. Misalnya, jika true, "Anggur" dikelompokkan dengan "anggur". Nilai defaultnya adalah true.
-   `IgnoreSpace` : Nilai logika (true/false) yang memungkinkan penggabungan bagian teks agar dapat menemukan grup. Misalnya, jika true, "ANG GUR" dikelompokkan dengan "Anggur". Nilai defaultnya adalah true.
-   `SimilarityColumnName` : Nama untuk kolom yang menunjukkan kesamaan antara nilai input dan nilai representatif untuk input tersebut. Nilai defaultnya adalah null, yang berarti kolom baru untuk kesamaan tidak akan ditambahkan.
-   `Threshold` : Angka antara 0,00 dan 1,00 yang menentukan skor kemiripan saat dua nilai akan dikelompokkan. Misalnya, "Anggur" dan "Anggr" (tidak ada "u") dikelompokkan bersama jika opsi ini diatur ke kurang dari 0,90. Ambang batas 1,00 hanya memungkinkan kecocokan yang sama persis. (Perhatikan bahwa "kecocokan sama persis" fuzzy mungkin mengabaikan perbedaan seperti huruf besar, urutan kata, dan tanda baca.) Nilai defaultnya adalah 0,80.
-   `TransformationTable` : Tabel yang mengizinkan pengelompokan data berdasarkan pemetaan nilai kustom. Harus berisi kolom "Dari" dan "Ke". Misalnya, "Anggur" dikelompokkan dengan "Kismis" jika tabel transformasi diberikan dengan kolom "Dari" yang berisi "Anggur" dan kolom "Ke" yang berisi "Kismis". Perhatikan bahwa transformasi akan diterapkan ke semua kemunculan teks dalam tabel transformasi. Dengan tabel transformasi di atas, "Anggur manis" juga akan dikelompokkan dengan "Kismis manis".


## Examples

### Example #1
Temukan nilai representatif untuk lokasi karyawan.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
