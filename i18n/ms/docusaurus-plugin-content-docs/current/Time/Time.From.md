---
title: Time.From
---

# Time.From


## Description

Mencipta masa daripada nilai yang ditentukan.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Mengembalikan nilai <code>masa</code> daripada <code>value</code> yang ditentukan. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Time.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan adalah <code>masa</code>, <code>value</code> dikembalikan. Nilai bagi jenis berikut boleh ditukarkan kepada nilai <code>masa</code>:      <ul>        <li><code>teks</code>: Nilai <code>masa</code> daripada perwakilan teks. Rujuk <code>Time.FromText</code> untuk butiran.</li>        <li><code>tarikhmasa</code>: Komponen masa bagi <code>value</code>.</li>        <li><code>datetimezone</code>: Komponen masa bagi tarikhmasa yang setara bagi <code>value</code>.</li>        <li><code>nombor</code>: <code>Masa</code> yang setara dengan bilangan hari pecahan yang dinyatakan oleh <code>value</code>. Jika <code>value</code> adalah negatif atau lebih besar atau sama dengan 1, ralat dikembalikan.</li>      </ul>Jika <code>value</code> adalah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1 
Menukar &lt;code&gt;0.7575&lt;/code&gt; kepada nilai &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Menukar &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; kepada nilai &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
