---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Menambahkan lajur baru dengan nilai wakil yang diperoleh oleh nilai perkumpulan kabur bagi lajur yang ditentukan dalam jadual.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Menambahkan lajur baru <code>newColumnName</code> pada <code>table</code> dengan nilai wakil bagi <code>columnName</code>. Wakil diperoleh dengan nilai yang sepadan secara kabur dalam <code>columnName</code>, untuk setiap baris.    Set pilihan <code>options</code> boleh disertakan untuk menentukan cara membandingkan lajur utama. Opsyen termasuk:    <ul><li><code>Culture</code> : Membenarkan rekod perkumpulan berdasarkan peraturan khusus budaya. Ia boleh menjadi nama budaya yang sah. Contohnya, opsyen Budaya bagi rekod kumpulan &quot;ja-JP&quot; yang berasaskan budaya Jepun. Nilai lalai ialah &quot;&quot;, yang kumpulannya berdasarkan budaya Inggeris Tak Berubah.</li><li><code>IgnoreCase</code> : Nilai logik (benar/palsu) yang membenarkan perkumpulan kunci tidak sensitif huruf. Contohnya, apabila benar, &quot;Anggur&quot; dikumpulkan dengan &quot;anggur&quot;. Nilai lalai ialah benar.</li><li><code>IgnoreSpace</code> : Nilai logik (benar/palsu) yang membenarkan gabungan bahagian teks untuk mencari kumpulan. Contohnya, apabila benar, &quot;Ang gur&quot; dikumpulkan dengan &quot;Anggur&quot;. Nilai lalai ialah benar.</li><li><code>SimilarityColumnName</code> : Nama untuk lajur yang menunjukkan keserupaan antara nilai input dan nilai wakil bagi input tersebut. Nilai lalai ialah nol, dalam kes ini, lajur baru untuk keserupaan tidak akan ditambahkan.</li><li><code>Threshold</code> : Nombor antara 0.00 hingga 1.00 yang menentukan skor keserupaan yang mana dua nilai akan dikumpulkan.    Sebagai contoh, &quot;Grapes&quot; dan &quot;Graes&quot; (hilang &quot;p&quot;) dikumpulkan bersama-sama hanya jika pilihan ini ditetapkan kepada kurang daripada 0.90.    Ambang 1.00 hanya membenarkan padanan tepat.    (Ambil perhatian bahawa &quot;padanan tepat&quot; kabur mungkin mengabaikan perbezaan seperti sarung, tertib perkataan, dan tanda baca.)    Nilai lalai ialah 0.80.</li><li><code>TransformationTable</code> : Jadual yang membenarkan rekod perkumpulan berdasarkan pemetaan nilai tersuai. Ia harus mengandungi lajur &quot;Daripada&quot; dan &quot;Kepada&quot;. Contohnya, &quot;Anggur&quot; dikumpulkan dengan &quot;Kismis&quot; jika jadual transformasi diberikan dengan lajur &quot;Daripada&quot; yang mengandungi &quot;Anggur&quot; dan lajur &quot;Kepada&quot; yang mengandungi &quot;Kismis&quot;. Perhatikan bahawa transformasi akan digunakan pada semua kejadian teks dalam jadual transformasi. Dengan jadual transformasi di atas, &quot;Anggur itu manis&quot; juga akan dikumpulkan dengan &quot;Kismis itu manis&quot;.</li></ul><br />    


## Examples

### Example #1 
Cari nilai wakil untuk lokasi pekerja.
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
