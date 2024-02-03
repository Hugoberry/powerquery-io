---
title: Date.From
---

# Date.From


## Description

Membuat tanggal dari nilai tertentu.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Menghasilkan nilai <code>date</code> dari <code>value</code> yang diberikan. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").Jika <code>value</code> yang diberikan adalah <code>null</code>, <code>Date.From</code> akan menghasilkan <code>null</code>. Jika <code>value</code> yang diberikan adalah <code>date</code>, <code>value</code> akan dihasilkan. Nilai tipe berikut dapat dikonversi ke nilai <code>date</code>:      <ul>        <li><code>text</code>: Nilai <code>date</code> dari representasi tekstual. Lihat <code>Date.FromText</code> untuk mengetahui detailnya.</li>        <li><code>datetime</code>: Komponen tanggal <code>value</code>.</li>        <li><code>datetimezone</code>: Komponen tanggal tanggalwaktu lokal yang setara dengan <code>value</code>.</li>        <li><code>number</code>: Komponen tanggal tanggalwaktu yang setara dengan Tanggal Automasi OLE yang dinyatakan oleh <code>value</code>.</li>      </ul>Jika <code>value</code> termasuk dalam tipe lain, kesalahan akan dihasilkan.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;43910&lt;/code&gt; ke nilai &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Mengkonversi &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; ke nilai &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
