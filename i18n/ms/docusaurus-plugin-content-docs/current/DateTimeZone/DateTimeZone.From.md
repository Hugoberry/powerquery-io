---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Mencipta datetimezone daripada nilai yang ditentukan.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Mengembalikan nilai <code>datetimezone</code> daripada <code>value</code> yang ditentukan. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>DateTimeZone.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>datetimezone</code>, <code>value</code> dikembalikan. Nilai jenis berikut boleh ditukarkan kepada nilai <code>datetimezone</code>:      <ul>        <li><code>teks</code>: Nilai <code>datetimezone</code> daripada perwakilan teks. Rujuk <code>DateTimeZone.FromText</code> untuk butiran.</li>        <li><code>tarikh</code>: <code>datetimezone</code> dengan <code>value</code> sebagai komponen data, <code>12:00:00 TGH MLM</code> sebagai komponen masa dan ofset yang sepadan dengan zon waktu setempat.</li>        <li><code>tarikhmasa</code>: <code>datetimezone</code> dengan <code>value</code> sebagai tarikhmasa dan ofset yang sepadan dengan zon waktu setempat.</li>        <li><code>masa</code>: <code>datetimezone</code> dengan tarikh yang setara dengan Tarikh Automasi OLE bagi <code>0</code> sebagai komponen tarikh, <code>value</code> sebagai komponen masa dan ofset yang sepadan dengan zon waktu setempat.</li>        <li><code>nombor</code>: <code>datetimezone</code> dengan tarikhmasa yang setara dengan Tarikh Automasi OLE yang dinyatakan oleh <code>value</code> dan ofset yang sepadan dengan zon waktu setempat.</li>      </ul>Jika <code>value</code> adalah daripada apa-apa jenis yang lain, ralat dikembalikan.


## Examples

### Example #1 
Menukar &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; kepada nilai &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
