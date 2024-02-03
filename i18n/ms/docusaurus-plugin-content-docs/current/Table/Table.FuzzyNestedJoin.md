---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

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


## Details

Mencantumkan baris <code>table1</code> dengan baris <code>table2</code> berdasarkan pemadanan kabur nilai lajur utama yang dipilih oleh <code>key1</code> (untuk <code>table1</code>) dan <code>key2</code> (untuk <code>table2</code>). Hasilnya dikembalikan dalam lajur baru yang dinamakan <code>newColumnName</code>.<br />Pemadanan kabur ialah perbandingan berdasarkan keserupaan teks, bukannya kesamaan teks.<br /><code>joinKind</code> pilihan menentukan jenis cantuman yang akan dilakukan. Secara lalui, cantuman luaran kiri dilakukan jika <code>joinKind</code> tidak ditentukan. Opsyen termasuk:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Set pilihan <code>joinOptions</code> mungkin disertakan untuk menentukan cara membandingkan lajur utama. Opsyen termasuk:    <ul><li><code>ConcurrentRequests</code> : Nombor antara 1 dan 8 yang menentukan bilangan jaluran selari untuk digunakan bagi pemadanan kabur. Nilai lalai ialah 1.</li><li><code>Culture</code> : Membenarkan rekod pemadanan berdasarkan peraturan khusus budaya. Ia boleh menjadi nama budaya yang sah. Contohnya, opsyen Budaya bagi rekod padanan &quot;ja-JP&quot; yang berasaskan budaya Jepun. Nilai lalai ialah &quot;&quot;, yang padanannya berdasarkan budaya Inggeris Tak Berubah.</li><li><code>IgnoreCase</code> : Nilai logik (benar/palsu) yang membenarkan pemadanan kunci tidak sensitif huruf. Contohnya, apabila benar, &quot;Anggur&quot; dipadankan dengan &quot;anggur&quot;. Nilai lalai ialah benar.</li><li><code>IgnoreSpace</code> : Nilai logik (benar/palsu) yang membenarkan gabungan bahagian teks untuk mencari padanan. Contohnya, apabila benar, &quot;Ang gur&quot; dipadankan dengan &quot;Anggur&quot;. Nilai lalai ialah benar.</li><li><code>NumberOfMatches</code> : Nombor bulat yang menentukan bilangan maksimum baris sepadan yang boleh dikembalikan untuk setiap baris input. Contohnya, nilai 1 akan dikembalikan pada banyak satu baris sepadan untuk setiap baris input. Jika opsyen ini tidak diberikan, semua baris sepadan dikembalikan.</li><li><code>SimilarityColumnName</code> : Nama untuk lajur yang menunjukkan keserupaan antara nilai input dan nilai wakil bagi input tersebut. Nilai lalai ialah nol, dalam kes ini, lajur baru untuk keserupaan tidak akan ditambahkan.</li><li><code>Threshold</code> : Nombor antara 0.00 dan 1.00 yang menentukan markah keserupaan yang mana dua nilainya akan dipadankan.    Sebagai contoh, &quot;Grapes&quot; and &quot;Graes&quot; (hilang &quot;p&quot;) hanya sepadan jika pilihan ini ditetapkan kepada kurang daripada 0.90.    Ambang 1.00 hanya membenarkan padanan yang tepat.    (Ambil perhatian bahawa &quot;padanan tepat&quot; yang kabur mungkin mengabaikan perbezaan seperti sarung, tertib perkataan, dan tanda baca.)    Nilai lalai ialah 0.80.</li><li><code>TransformationTable</code> : Jadual yang membenarkan rekod pemadanan berdasarkan pemetaan nilai tersuai. Ia harus mengandungi lajur &quot;Daripada&quot; dan &quot;Kepada&quot;. Contohnya, &quot;Anggur&quot; dipadankan dengan &quot;Kismis&quot; jika jadual transformasi diberikan dengan lajur &quot;Daripada&quot; yang mengandungi &quot;Anggur&quot; dan lajur &quot;Kepada&quot; yang mengandungi &quot;Kismis&quot;. Perhatikan bahawa transformasi akan digunakan pada semua kejadian teks dalam jadual transformasi. Dengan jadual transformasi di atas, &quot;Anggur itu manis&quot; juga akan dipadankan dengan &quot;Kismis itu manis&quot;.</li></ul><br />


## Examples

### Example #1 
Cantuman kabur dalaman kiri bagi dua jadual berdasarkan pada [FirstName]
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
