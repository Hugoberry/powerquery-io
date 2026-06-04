---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Mengelompokkan baris dalam tabel berdasarkan pada pencocokan fuzzy kunci.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Mengelompokkan baris `table` dengan mencocokkan nilai secara fuzzy pada kolom yang ditentukan, `key`, untuk setiap baris. Untuk setiap grup, catatan dikonstruksi berisi kolom kunci (dan nilainya) bersama dengan kolom agregat yang ditentukan oleh `aggregatedColumns`. Fungsi ini tidak dapat menjamin untuk menghasilkan urutan baris yang tetap.

Rangkaian opsional `options` dapat disertakan untuk menentukan cara membandingkan kolom kunci. Opsi meliputi:

-   `Culture` : Mengizinkan pengelompokan data berdasarkan aturan khusus kultur. Ini dapat berupa nama kultur yang valid. Misalnya, opsi kultur "ja-JP" mengelompokkan catatan berdasarkan kultur Jepang. Nilai defaultnya adalah "", yang grupnya berdasarkan kultur bahasa Inggris invarian.
-   `IgnoreCase` : Nilai logika (true/false) yang memungkinkan pengelompokan kunci tidak peka huruf besar/kecil. Misalnya, jika true, "Anggur" dikelompokkan dengan "anggur". Nilai defaultnya adalah true.
-   `IgnoreSpace` : Nilai logika (true/false) yang memungkinkan penggabungan bagian teks agar dapat menemukan grup. Misalnya, jika true, "ANG GUR" dikelompokkan dengan "Anggur". Nilai defaultnya adalah true.
-   `SimilarityColumnName` : Nama untuk kolom yang menunjukkan kesamaan antara nilai input dan nilai representatif untuk input tersebut. Nilai defaultnya adalah null, yang berarti kolom baru untuk kesamaan tidak akan ditambahkan.
-   `Threshold` : Angka antara 0,00 dan 1,00 yang menentukan skor kemiripan saat dua nilai akan dikelompokkan. Misalnya, "Anggur" dan "Anggr" (tidak ada "u") dikelompokkan bersama jika opsi ini diatur ke kurang dari 0,90. Ambang batas 1,00 hanya memungkinkan kecocokan yang sama persis. (Perhatikan bahwa "kecocokan sama persis" fuzzy mungkin mengabaikan perbedaan seperti huruf besar, urutan kata, dan tanda baca.) Nilai defaultnya adalah 0,80.
-   `TransformationTable` : Tabel yang mengizinkan pengelompokan data berdasarkan pemetaan nilai kustom. Harus berisi kolom "Dari" dan "Ke". Misalnya, "Anggur" dikelompokkan dengan "Kismis" jika tabel transformasi diberikan dengan kolom "Dari" yang berisi "Anggur" dan kolom "Ke" yang berisi "Kismis". Perhatikan bahwa transformasi akan diterapkan ke semua kemunculan teks dalam tabel transformasi. Dengan tabel transformasi di atas, "Anggur manis" juga akan dikelompokkan dengan "Kismis manis".


## Examples

### Example #1
Kelompokkan tabel dengan menambahkan kolom agregat \[Count\] yang berisi jumlah karyawan di setiap lokasi (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
