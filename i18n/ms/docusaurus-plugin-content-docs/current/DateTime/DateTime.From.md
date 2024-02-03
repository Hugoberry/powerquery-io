---
title: DateTime.From
---

# DateTime.From


## Description

Mencipta datetime daripada nilai yang ditentukan.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Mengembalikan nilai <code>tarikhmasa</code> daripada <code>value</code> yang diberikan. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>DateTime.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>tarikhmasa</code>, <code>value</code> dikembalikan. Nilai bagi jenis berikut boleh ditukarkan kepada nilai <code>tarikhmasa</code>:      <ul>        <li><code>teks</code>: Nilai <code>tarikhmasa</code> daripada perwakilan teks. Rujuk <code>DateTime.FromText</code> untuk butiran.</li>        <li><code>tarikh</code>: <code>tarikhmasa</code> dengan <code>value</code> sebagai komponen tarikh dan <code>12:00:00 TGH MLM</code> sebagai komponen masa.</li>        <li><code>datetimezone</code>: <code>tarikhmasa</code> setempat yang setara bagi <code>value</code>.</li>        <li><code>masa</code>: <code>tarikhmasa</code> dengan tarikh yang setara bagi Tarikh Automasi OLE bagi <code>0</code> sebagai komponen tarikh dan <code>value</code> sebagai komponen masa.</li>        <li><code>nombor</code>: <code>tarikhmasa</code> yang setara dengan Tarikh Automasi OLE yang dinyatakan oleh <code>value</code>. </li>      </ul>Jika <code>value</code> adalah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1 
Menukar &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; kepada nilai &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Menukar &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; kepada nilai &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
