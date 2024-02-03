---
title: Date.From
---

# Date.From


## Description

Mencipta tarikh daripada nilai yang ditentukan.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Mengembalikan nilai <code>tarikh</code> daripada <code>value</code> yang ditentukan. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").Jika <code>value</code> yang ditentukan ialah <code>nol</code>, <code>Date.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>tarikh</code>, <code>value</code> dikembalikan. Nilai bagi jenis yang berikut boleh ditukarkan kepada nilai <code>tarikh</code>:      <ul>        <li><code>teks</code>: Nilai <code>tarikh</code> daripada perwakilan teks. Lihat <code>Date.FromText</code> untuk butiran.</li>        <li><code>tarikhmasa</code>: Komponen tarikh bagi <code>value</code>.</li>        <li><code>datetimezone</code>: Komponen tarikh bagi tarikhmasa setempat yang setara dengan <code>value</code>.</li>        <li><code>nombor</code>: Komponen tarikh dengan tarikhmasa yang setara dengan Tarikh Automasi OLE yang dinyatakan oleh <code>value</code>.</li>      </ul>Jika <code>value</code> ialah mana-mana jenis yang lain, ralat dikembalikan.


## Examples

### Example #1 
Menukar &lt;code&gt;43910&lt;/code&gt; kepada nilai &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Menukar &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; kepada nilai &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
