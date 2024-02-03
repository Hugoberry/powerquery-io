---
title: Number.From
---

# Number.From


## Description

Membuat bilangan dari nilai tertentu.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Menghasilkan nilai <code>number</code> dari <code>value</code> tertentu. <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").Jika <code>value</code> tertentu adalah <code>null</code>, <code>Number.From</code> menghasilkan <code>null</code>. Jika <code>value</code> tertentu adalah <code>number</code>, dihasilkan <code>value</code>. Nilai tipe berikut dapat dikonversi ke nilai <code>number</code>:      <ul>        <li><code>teks</code>: Nilai <code>number</code> dari representasi tekstual. Format teks umum ditangani ("15", "3,423.10", "5.0E-10"). Lihat <code>Number.FromText</code> untuk detailnya.</li>        <li><code>logical</code>: 1 untuk <code>true</code>, 0 untuk <code>false</code>.</li>        <li><code>datetime</code>: Bilangan titik mengambang presisi ganda yang berisi tanggal setara tanggal Automasi OLE.</li>        <li><code>datetimezone</code>: Bilangan titik mengambang presisi ganda yang berisi tanggal Automasi OLE setara tanggal dan waktu lokal <code>value</code>.</li>        <li><code>tanggal</code>: Bilangan titik mengambang presisi ganda yang berisi tanggal Automasi OLE yang setara.</li>        <li><code>date</code>: Dinyatakan dalam hari fraksional.</li>        <li><code>duration</code>: Dinyatakan secara hari keseluruhan dan pecahan.</li>      </ul>Jika <code>value</code> termasuk dalam tipe lain, akan menghasilkan kesalahan.


## Examples

### Example #1 
Mengambil nilai &lt;code&gt;number&lt;/code&gt; dari &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Mengambil nilai &lt;code&gt;number&lt;/code&gt; dari &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Dapatkan nilai &lt;code&gt;angka&lt;/code&gt; dari &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
