---
title: Time.From
---

# Time.From


## Description

Membuat waktu dari nilai tertentu.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Menghasilkan nilai <code>time</code> dari <code>value</code> tertentu. <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").Jika <code>value</code> tertentu adalah <code>null</code>, <code>Time.From</code> menghasilkan <code>null</code>. Jika <code>value</code> tertentu adalah <code>time</code>, dihasilkan <code>value</code>. Nilai tipe berikut dapat dikonversi ke nilai <code>time</code>:      <ul>        <li><code>text</code>: Nilai <code>time</code> dari representasi tekstual. Lihat <code>Time.FromText</code> untuk detailnya.</li>        <li><code>datetime</code>: Komponen waktu <code>value</code>.</li>        <li><code>datetimezone</code>: Komponen tanggalwaktu lokal setara dengan <code>value</code>.</li>        <li><code>number</code>: <code>time</code> setara dengan jumlah hari pecahan yang dinyatakan dengan <code>value</code>. Jika <code>value</code> negatif atau lebih besar atau setara dengan 1, akan menghasilkan kesalahan.</li>      </ul>Jika <code>value</code> termasuk dalam tipe lain, akan menghasilkan kesalahan.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;0.7575&lt;/code&gt; ke nilai &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Mengkonversi &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; ke nilai &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
