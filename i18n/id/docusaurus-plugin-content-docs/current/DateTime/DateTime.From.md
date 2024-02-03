---
title: DateTime.From
---

# DateTime.From


## Description

Membuat datetime dari nilai tertentu.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Menghasilkan nilai <code>datetime</code> dari <code>value</code> yang diberikan. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").Jika <code>value</code> yang diberikan adalah <code>null</code>, <code>DateTime.From</code> akan menghasilkan <code>null</code>. Jika <code>value</code> yang diberikan adalah <code>datetime</code>, <code>value</code> akan dihasilkan. Nilai tipe berikut dapat dikonversi ke nilai <code>datetime</code>:      <ul>        <li><code>text</code>: Nilai <code>datetime</code> dari representasi tekstual. Lihat <code>DateTime.FromText</code> untuk mengetahui detailnya.</li>        <li><code>date</code>: <code>datetime</code> dengan <code>value</code> sebagai komponen tanggal dan <code>12:00:00</code> sebagai komponen waktu.</li>        <li><code>datetimezone</code>: <code>datetime</code> lokal yang setara dengan <code>value</code>.</li>        <li><code>time</code>: <code>datetime</code> dengan tanggal yang setara dengan Tanggal Automasi OLE <code>0</code> sebagai komponen tanggal dan <code>value</code> sebagai komponen waktu.</li>        <li><code>number</code>: <code>datetime</code> yang setara dengan Tanggal Automasi OLE yang dinyatakan oleh <code>value</code>. </li>      </ul>Jika <code>value</code> termasuk dalam tipe lain, kesalahan akan dihasilkan.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; ke nilai &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Mengkonversi &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; ke nilai &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
