---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Mengembalikan apa-apa jadual yang ditemui dalam fail PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Mengembalikan sebarang jadual yang ditemui dalam <code>pdf</code>. Parameter rekod pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:    <ul><li><code>Implementation</code> : Versi algoritma yang digunakan apabila mengenal pasti jadual. Versi lama tersedia hanya untuk keserasian ke belakang, untuk menghalang pertanyaan lama daripada dijejaskan oleh kemas kini algoritma. Versi terbaharu sepatutnya sentiasa memberikan hasil terbaik. Nilai yang sah ialah &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot;, atau nol.</li><li><code>StartPage</code> : Menentukan halaman pertama dalam julat halaman untuk diperiksa. Lalai: 1.</li><li><code>EndPage</code> : Menentukan halaman terakhir dalam julat halaman untuk diperiksa. Lalai: halaman terakhir bagi dokumen.</li><li><code>MultiPageTables</code> : Mengawal sama ada jadual yang sama pada halaman berturutan akan secara automatik digabungkan ke dalam jadual tunggal. Lalai: benar.</li><li><code>EnforceBorderLines</code> : Mengawal sama ada garis sempadan sentiasa dikuatkuasakan sebagai sempadan sel (apabila benar) atau hanya digunakan sebagai satu petunjuk antara banyak untuk menentukan sempadan sel (apabila palsu). Lalai: palsu.</li></ul>    


## Examples

### Example #1 
Mengembalikan jadual yang terkandung dalam sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table ({"Name", "Kind", "Data"}, ...)
```




## Category
Mencapai data
