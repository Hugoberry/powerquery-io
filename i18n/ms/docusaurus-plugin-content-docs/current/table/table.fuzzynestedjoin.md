---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Menjalankan cantuman kabur antara jadual pada lajur yang dibekalkan dan menghasilkan hasil cantuman dalam lajur baru.


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

Mencantumkan baris `table1` dengan baris `table2` berdasarkan pemadanan kabur nilai lajur utama yang dipilih oleh `key1` (untuk `table1`) dan `key2` (untuk `table2`). Hasilnya dikembalikan dalam lajur baru yang dinamakan `newColumnName`.

Pemadanan kabur ialah perbandingan berdasarkan keserupaan teks, bukannya kesamaan teks.

`joinKind` pilihan menentukan jenis cantuman yang akan dilakukan. Secara lalui, cantuman luaran kiri dilakukan jika `joinKind` tidak ditentukan. Opsyen termasuk:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Set pilihan `joinOptions` mungkin disertakan untuk menentukan cara membandingkan lajur utama. Opsyen termasuk:

-   `ConcurrentRequests` : Nombor antara 1 dan 8 yang menentukan bilangan jaluran selari untuk digunakan bagi pemadanan kabur. Nilai lalai ialah 1.
-   `Culture` : Membenarkan rekod pemadanan berdasarkan peraturan khusus budaya. Ia boleh menjadi nama budaya yang sah. Contohnya, opsyen Budaya bagi rekod padanan "ja-JP" yang berasaskan budaya Jepun. Nilai lalai ialah "", yang padanannya berdasarkan budaya Inggeris Tak Berubah.
-   `IgnoreCase` : Nilai logik (benar/palsu) yang membenarkan pemadanan kunci tidak sensitif huruf. Contohnya, apabila benar, "Anggur" dipadankan dengan "anggur". Nilai lalai ialah benar.
-   `IgnoreSpace` : Nilai logik (benar/palsu) yang membenarkan gabungan bahagian teks untuk mencari padanan. Contohnya, apabila benar, "Ang gur" dipadankan dengan "Anggur". Nilai lalai ialah benar.
-   `NumberOfMatches` : Nombor bulat yang menentukan bilangan maksimum baris sepadan yang boleh dikembalikan untuk setiap baris input. Contohnya, nilai 1 akan dikembalikan pada banyak satu baris sepadan untuk setiap baris input. Jika opsyen ini tidak diberikan, semua baris sepadan dikembalikan.
-   `SimilarityColumnName` : Nama untuk lajur yang menunjukkan keserupaan antara nilai input dan nilai wakil bagi input tersebut. Nilai lalai ialah nol, dalam kes ini, lajur baru untuk keserupaan tidak akan ditambahkan.
-   `Threshold` : Nombor antara 0.00 dan 1.00 yang menentukan markah keserupaan yang mana dua nilainya akan dipadankan. Sebagai contoh, "Grapes" and "Graes" (hilang "p") hanya sepadan jika pilihan ini ditetapkan kepada kurang daripada 0.90. Ambang 1.00 hanya membenarkan padanan yang tepat. (Ambil perhatian bahawa "padanan tepat" yang kabur mungkin mengabaikan perbezaan seperti sarung, tertib perkataan, dan tanda baca.) Nilai lalai ialah 0.80.
-   `TransformationTable` : Jadual yang membenarkan rekod pemadanan berdasarkan pemetaan nilai tersuai. Ia harus mengandungi lajur "Daripada" dan "Kepada". Contohnya, "Anggur" dipadankan dengan "Kismis" jika jadual transformasi diberikan dengan lajur "Daripada" yang mengandungi "Anggur" dan lajur "Kepada" yang mengandungi "Kismis". Perhatikan bahawa transformasi akan digunakan pada semua kejadian teks dalam jadual transformasi. Dengan jadual transformasi di atas, "Anggur itu manis" juga akan dipadankan dengan "Kismis itu manis".


## Examples

### Example #1
Cantuman kabur dalaman kiri bagi dua jadual berdasarkan pada \[FirstName\]
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
