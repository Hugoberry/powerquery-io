---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Menghasilkan tabel apa pun yang ditemukan di file PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Menghasilkan tabel yang ditemukan dalam <code>pdf</code>. Parameter catatan opsional, <code>options</code>, dapat diberikan untuk menetapkan properti tambahan. Data dapat berisi bidang berikut:    <ul><li><code>Implementation</code> : Versi algoritma yang akan digunakan saat mengidentifikasi tabel. Versi lama hanya tersedia untuk kompatibilitas mundur guna mencegah kueri lama menjadi rusak oleh pembaruan algoritma. Versi terbaru akan selalu memberikan hasil terbaik. Nilai yang valid adalah &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot;, atau null.</li><li><code>StartPage</code> : Menetapkan halaman pertama dalam rentang halaman untuk diperiksa. Default: 1.</li><li><code>EndPage</code> : Menetapkan halaman terakhir dalam rentang halaman untuk diperiksa. Default: halaman terakhir dokumen.</li><li><code>MultiPageTables</code> : Mengontrol apakah tabel serupa pada halaman berurutan akan digabungkan secara otomatis dalam satu tabel. Default: true.</li><li><code>EnforceBorderLines</code> : Mengontrol apakah garis tepi selalu diterapkan sebagai batas sel (jika true), atau hanya digunakan sebagai salah satu petunjuk untuk menentukan batas sel (jika false). Default: false.</li></ul>    


## Examples

### Example #1 
Menghasilkan tabel yang terdapat dalam sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Mengakses data
