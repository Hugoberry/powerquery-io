---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Menggabungkan baris dari dua tabel yang memiliki kecocokan fuzzy berdasarkan kunci tertentu.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

Menggabungkan baris <code>table1</code> dengan baris <code>table2</code> berdasarkan pencocokan fuzzy dari nilai kolom utama yang dipilih oleh <code>key1</code> (untuk <code>table1</code>) dan <code>key2</code> (untuk <code>table2</code>).<br />Pencocokan fuzzy adalah perbandingan berdasarkan pada kemiripan teks bukan persamaan teks.<br />Secara default, penggabungan dalam dilakukan, namun <code>joinKind</code> opsional dapat disertakan untuk menetapkan tipe gabungan. Opsi mencakup:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Kumpulan opsional <code>joinOptions</code> dapat disertakan untuk menentukan cara membandingkan kolom utama. Opsi mencakup:    <ul><li><code>ConcurrentRequests</code> : Angka antara 1 dan 8 yang menentukan jumlah utas paralel yang digunakan untuk pencocokan fuzzy. Nilai defaultnya adalah 1.</li><li><code>Culture</code> : Mengizinkan pencocokan catatan berdasarkan aturan khusus kultur. Ini dapat berupa nama kultur yang valid. Misalnya, opsi kultur &quot;ja-JP&quot; mencocokkan catatan dengan data berdasarkan kultur Jepang. Nilai defaultnya adalah &quot;&quot;, yang cocok berdasarkan kultur bahasa Inggris Invarian.</li><li><code>IgnoreCase</code> : Nilai logika (true/false) yang memungkinkan pencocokan kunci tidak peka huruf besar/kecil. Misalnya, jika true, &quot;Anggur&quot; cocok dengan &quot;anggur&quot;. Nilai defaultnya adalah true.</li><li><code>IgnoreSpace</code> : Nilai logika (true/false) yang memungkinkan penggabungan bagian teks agar dapat menemukan kecocokan. Misalnya, jika true, &quot;Ang gur&quot; cocok dengan &quot;Anggur&quot;. Nilai defaultnya adalah true.</li><li><code>NumberOfMatches</code> : Bilangan bulat yang menentukan jumlah maksimum baris pencocokan yang dapat dihasilkan untuk setiap baris input. Misalnya, nilai 1 akan menghasilkan paling banyak satu baris yang cocok untuk setiap baris input. Jika opsi ini tidak tersedia, semua baris yang cocok ditampilkan.</li><li><code>SimilarityColumnName</code> : Nama untuk kolom yang menunjukkan kesamaan antara nilai input dan nilai representatif untuk input tersebut. Nilai defaultnya adalah null, yang berarti kolom baru untuk kesamaan tidak akan ditambahkan.</li><li><code>Threshold</code> : Angka antara 0,00 dan 1,00 yang menentukan skor kemiripan saat dua nilai akan dicocokkan.    Misalnya, &quot;Anggur&quot; dan &quot;Anggr&quot; (tidak ada &quot;u&quot;) hanya akan cocok jika opsi ini diatur ke kurang dari 0,90.    Ambang batas 1,00 hanya memungkinkan kecocokan yang sama persis.    (Perhatikan bahwa &quot;kecocokan sama persis&quot; fuzzy mungkin mengabaikan perbedaan seperti huruf besar, urutan kata, dan tanda baca.)    Nilai defaultnya adalah 0,80.</li><li><code>TransformationTable</code> : Tabel yang mengizinkan catatan yang cocok berdasarkan pada pemetaan nilai kustom. Harus berisi kolom &quot;Dari&quot; dan &quot;Ke&quot;. Misalnya, &quot;Anggur&quot; cocok dengan &quot;Kismis&quot; jika tabel transformasi diberikan dengan kolom &quot;Dari&quot; yang berisi &quot;Anggur&quot; dan kolom &quot;Ke&quot; yang berisi &quot;Kismis&quot;. Perhatikan bahwa transformasi akan diterapkan ke semua kemunculan teks dalam tabel transformasi. Dengan tabel transformasi di atas, &quot;Anggur manis&quot; juga akan dicocokkan dengan &quot;Kismis manis&quot;.</li></ul><br />    


## Examples

### Example #1 
Gabungan fuzzy kiri dalam dari dua tabel berdasarkan [FirstName]
```powerquery
Table.FuzzyJoin(
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
			  CustomerStateID = 1,
			  FirstName2 = "Bob",
			  State = "TX"
		],
    [
			  CustomerID = 1,
			  FirstName1 = "Bob",
			  Phone = "555-1234",
			  CustomerStateID = 2,
			  FirstName2 = "bOB",
			  State = "CA"
		],
    [
			  CustomerID = 2,
			  FirstName1 = "Robert",
			  Phone = "555-4567",
			  CustomerStateID = null,
			  FirstName2 = null,
			  State = null
		]
})
```




## Category
Table.Transformation
