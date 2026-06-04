---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Mengumpulkan baris dalam jadual berdasarkan padanan kabur kunci.


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

Mengumpulkan baris `table` dengan nilai pemadanan secara kabur dalam lajur tertentu, `key`, untuk setiap baris. Untuk setiap kumpulan, rekod dibina yang mengandungi lajur utama (dan nilainya) berserta dengan sebarang lajur teragregat yang ditentukan oleh `aggregatedColumns`. Fungsi ini tidak boleh menjamin untuk mengembalikan tertib baris yang tetap.

Set pilihan `options` mungkin disertakan untuk menentukan cara untuk membandingkan lajur utama. Opsyen termasuk:

-   `Culture` : Membenarkan rekod perkumpulan berdasarkan peraturan khusus budaya. Ia boleh menjadi nama budaya yang sah. Contohnya, opsyen Budaya bagi rekod kumpulan "ja-JP" yang berasaskan budaya Jepun. Nilai lalai ialah "", yang kumpulannya berdasarkan budaya Inggeris Tak Berubah.
-   `IgnoreCase` : Nilai logik (benar/palsu) yang membenarkan perkumpulan kunci tidak sensitif huruf. Contohnya, apabila benar, "Anggur" dikumpulkan dengan "anggur". Nilai lalai ialah benar.
-   `IgnoreSpace` : Nilai logik (benar/palsu) yang membenarkan gabungan bahagian teks untuk mencari kumpulan. Contohnya, apabila benar, "Ang gur" dikumpulkan dengan "Anggur". Nilai lalai ialah benar.
-   `SimilarityColumnName` : Nama untuk lajur yang menunjukkan keserupaan antara nilai input dan nilai wakil bagi input tersebut. Nilai lalai ialah nol, dalam kes ini, lajur baru untuk keserupaan tidak akan ditambahkan.
-   `Threshold` : Nombor antara 0.00 hingga 1.00 yang menentukan skor keserupaan yang mana dua nilai akan dikumpulkan. Sebagai contoh, "Grapes" dan "Graes" (hilang "p") dikumpulkan bersama-sama hanya jika pilihan ini ditetapkan kepada kurang daripada 0.90. Ambang 1.00 hanya membenarkan padanan tepat. (Ambil perhatian bahawa "padanan tepat" kabur mungkin mengabaikan perbezaan seperti sarung, tertib perkataan, dan tanda baca.) Nilai lalai ialah 0.80.
-   `TransformationTable` : Jadual yang membenarkan rekod perkumpulan berdasarkan pemetaan nilai tersuai. Ia harus mengandungi lajur "Daripada" dan "Kepada". Contohnya, "Anggur" dikumpulkan dengan "Kismis" jika jadual transformasi diberikan dengan lajur "Daripada" yang mengandungi "Anggur" dan lajur "Kepada" yang mengandungi "Kismis". Perhatikan bahawa transformasi akan digunakan pada semua kejadian teks dalam jadual transformasi. Dengan jadual transformasi di atas, "Anggur itu manis" juga akan dikumpulkan dengan "Kismis itu manis".


## Examples

### Example #1
Kumpulkan jadual dengan menambah lajur agregat \[Count\] yang mengandungi bilangan pekerja dalam setiap lokasi (`each Table.RowCount(_)`).
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
