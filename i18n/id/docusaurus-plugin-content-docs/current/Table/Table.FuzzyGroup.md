---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

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


## Details

Mengelompokkan baris <code>table</code> dengan mencocokkan nilai secara fuzzy pada kolom yang ditentukan, <code>key</code>, untuk setiap baris.    Untuk setiap grup, catatan dikonstruksi berisi kolom kunci (dan nilainya) bersama dengan kolom agregat yang ditentukan oleh <code>aggregatedColumns</code>.    Fungsi ini tidak dapat menjamin untuk menghasilkan urutan baris yang tetap.    Rangkaian opsional <code>options</code> dapat disertakan untuk menentukan cara membandingkan kolom kunci. Opsi meliputi:     <ul><li><code>Culture</code> : Mengizinkan pengelompokan data berdasarkan aturan khusus kultur. Ini dapat berupa nama kultur yang valid. Misalnya, opsi kultur &quot;ja-JP&quot; mengelompokkan catatan berdasarkan kultur Jepang. Nilai defaultnya adalah &quot;&quot;, yang grupnya berdasarkan kultur bahasa Inggris invarian.</li><li><code>IgnoreCase</code> : Nilai logika (true/false) yang memungkinkan pengelompokan kunci tidak peka huruf besar/kecil. Misalnya, jika true, &quot;Anggur&quot; dikelompokkan dengan &quot;anggur&quot;. Nilai defaultnya adalah true.</li><li><code>IgnoreSpace</code> : Nilai logika (true/false) yang memungkinkan penggabungan bagian teks agar dapat menemukan grup. Misalnya, jika true, &quot;ANG GUR&quot; dikelompokkan dengan &quot;Anggur&quot;. Nilai defaultnya adalah true.</li><li><code>SimilarityColumnName</code> : Nama untuk kolom yang menunjukkan kesamaan antara nilai input dan nilai representatif untuk input tersebut. Nilai defaultnya adalah null, yang berarti kolom baru untuk kesamaan tidak akan ditambahkan.</li><li><code>Threshold</code> : Angka antara 0,00 dan 1,00 yang menentukan skor kemiripan saat dua nilai akan dikelompokkan.    Misalnya, &quot;Anggur&quot; dan &quot;Anggr&quot; (tidak ada &quot;u&quot;) dikelompokkan bersama jika opsi ini diatur ke kurang dari 0,90.    Ambang batas 1,00 hanya memungkinkan kecocokan yang sama persis.    (Perhatikan bahwa &quot;kecocokan sama persis&quot; fuzzy mungkin mengabaikan perbedaan seperti huruf besar, urutan kata, dan tanda baca.)    Nilai defaultnya adalah 0,80.</li><li><code>TransformationTable</code> : Tabel yang mengizinkan pengelompokan data berdasarkan pemetaan nilai kustom. Harus berisi kolom &quot;Dari&quot; dan &quot;Ke&quot;. Misalnya, &quot;Anggur&quot; dikelompokkan dengan &quot;Kismis&quot; jika tabel transformasi diberikan dengan kolom &quot;Dari&quot; yang berisi &quot;Anggur&quot; dan kolom &quot;Ke&quot; yang berisi &quot;Kismis&quot;. Perhatikan bahwa transformasi akan diterapkan ke semua kemunculan teks dalam tabel transformasi. Dengan tabel transformasi di atas, &quot;Anggur manis&quot; juga akan dikelompokkan dengan &quot;Kismis manis&quot;.</li></ul><br />    


## Examples

### Example #1 
Kelompokkan tabel dengan menambahkan kolom agregat [Count] yang berisi jumlah karyawan di setiap lokasi (&#34;setiap Table.RowCount(_))&#34;).
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
