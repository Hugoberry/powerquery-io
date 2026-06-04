---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Melakukan penggabungan fuzzy di antara tabel di kolom yang tersedia dan menampilkan hasil gabungan di kolom baru.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Menggabungkan baris `table1` dengan baris `table2` berdasarkan pencocokan fuzzy dari nilai kolom utama yang dipilih oleh `key1` (untuk `table1`) dan `key2` (untuk `table2`). Hasilnya dimasukkan ke dalam kolom baru bernama `newColumnName`.

Pencocokan fuzzy adalah perbandingan berdasarkan kemiripan teks bukan persamaan teks.

`joinKind` opsional menentukan jenis gabungan yang akan dilakukan. Secara default, gabungan kiri luar akan dilakukan jika `joinKind` tidak ditetapkan. Opsi mencakup:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Kumpulan opsional `joinOptions` dapat disertakan untuk menentukan cara membandingkan kolom utama. Opsi mencakup:

-   `ConcurrentRequests` : Angka antara 1 dan 8 yang menentukan jumlah utas paralel yang digunakan untuk pencocokan fuzzy. Nilai defaultnya adalah 1.
-   `Culture` : Mengizinkan pencocokan catatan berdasarkan aturan khusus kultur. Ini dapat berupa nama kultur yang valid. Misalnya, opsi kultur "ja-JP" mencocokkan catatan dengan data berdasarkan kultur Jepang. Nilai defaultnya adalah "", yang cocok berdasarkan kultur bahasa Inggris Invarian.
-   `IgnoreCase` : Nilai logika (true/false) yang memungkinkan pencocokan kunci tidak peka huruf besar/kecil. Misalnya, jika true, "Anggur" cocok dengan "anggur". Nilai defaultnya adalah true.
-   `IgnoreSpace` : Nilai logika (true/false) yang memungkinkan penggabungan bagian teks agar dapat menemukan kecocokan. Misalnya, jika true, "Ang gur" cocok dengan "Anggur". Nilai defaultnya adalah true.
-   `NumberOfMatches` : Bilangan bulat yang menentukan jumlah maksimum baris pencocokan yang dapat dihasilkan untuk setiap baris input. Misalnya, nilai 1 akan menghasilkan paling banyak satu baris yang cocok untuk setiap baris input. Jika opsi ini tidak tersedia, semua baris yang cocok ditampilkan.
-   `SimilarityColumnName` : Nama untuk kolom yang menunjukkan kesamaan antara nilai input dan nilai representatif untuk input tersebut. Nilai defaultnya adalah null, yang berarti kolom baru untuk kesamaan tidak akan ditambahkan.
-   `Threshold` : Angka antara 0,00 dan 1,00 yang menentukan skor kemiripan saat dua nilai akan dicocokkan. Misalnya, "Anggur" dan "Anggr" (tidak ada "u") hanya akan cocok jika opsi ini diatur ke kurang dari 0,90. Ambang batas 1,00 hanya memungkinkan kecocokan yang sama persis. (Perhatikan bahwa "kecocokan sama persis" fuzzy mungkin mengabaikan perbedaan seperti huruf besar, urutan kata, dan tanda baca.) Nilai defaultnya adalah 0,80.
-   `TransformationTable` : Tabel yang mengizinkan catatan yang cocok berdasarkan pada pemetaan nilai kustom. Harus berisi kolom "Dari" dan "Ke". Misalnya, "Anggur" cocok dengan "Kismis" jika tabel transformasi diberikan dengan kolom "Dari" yang berisi "Anggur" dan kolom "Ke" yang berisi "Kismis". Perhatikan bahwa transformasi akan diterapkan ke semua kemunculan teks dalam tabel transformasi. Dengan tabel transformasi di atas, "Anggur manis" juga akan dicocokkan dengan "Kismis manis".


## Examples

### Example #1
Gabungan fuzzy kiri dalam dari dua tabel berdasarkan \[FirstName\]
```powerquery
Table.FuzzyNestedJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    "NestedTable",
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
