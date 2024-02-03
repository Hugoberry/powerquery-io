---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Membuat datetimezone dari nilai tertentu.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Menghasilkan nilai <code>datetimezone</code> dari <code>value</code> yang diberikan. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").Jika <code>value</code> yang diberikan adalah <code>null</code>, <code>DateTimeZone.From</code> akan menghasilkan <code>null</code>. Jika <code>value</code> yang diberikan adalah <code>datetimezone</code>, <code>value</code> akan dihasilkan. Nilai tipe berikut dapat dikonversi ke nilai <code>datetimezone</code>:      <ul>        <li><code>text</code>: Nilai <code>datetimezone</code> dari representasi tekstual. Lihat <code>DateTimeZone.FromText</code> untuk mengetahui detailnya.</li>        <li><code>date</code>: <code>datetimezone</code> dengan <code>value</code> sebagai komponen tanggal, <code>12:00:00 AM</code> sebagai komponen waktu, dan offset yang sesuai dengan zona waktu lokal.</li>        <li><code>datetime</code>: <code>datetimezone</code> dengan <code>value</code> sebagai tanggalwaktu dan offset yang sesuai dengan zona waktu lokal.</li>        <li><code>time</code>: <code>datetimezone</code> dengan tanggal setara Tanggal Automasi OLE <code>0</code> sebagai komponen tanggal, <code>value</code> sebagai komponen waktu, dan offset yang sesuai dengan zona waktu lokal.</li>        <li><code>number</code>: <code>datetimezone</code> dengan tanggalwaktu yang setara dengan Tanggal Automasi OLE yang dinyatakan oleh <code>value</code> dan offset yang sesuai dengan zona waktu lokal.</li>      </ul>Jika <code>value</code> termasuk dalam tipe lain, kesalahan akan dihasilkan.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; ke nilai &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
