---
title: Number.From
---

# Number.From


## Description

Mencipta nombor daripada nilai yang ditentukan.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>nombor</code> daripada <code>value</code> yang ditentukan. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Number.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>nombor</code>, <code>value</code> dikembalikan. Nilai bagi jenis yang berikut boleh ditukarkan kepada nilai <code>number</code>:      <ul>        <li><code>teks</code>: Nilai <code>nombor</code> daripada perwakilan teks. Format teks lazim dikendalikan ("15", "3,423.10", "5.0E-10"). Rujuk <code>Number.FromText</code> untuk butiran.</li>        <li><code>logik</code>: 1 untuk <code>benar</code>, 0 untuk <code>salah</code>.</li>        <li><code>tarikhmasa</code>: Nombor titik apungan kepersisan berganda yang mengandungi tarikh Automasi OLE yang setara.</li>        <li><code>datetimezone</code>: Nombor titik apungan kepersisan berganda yang mengandungi tarikh Automasi OLE yang setara bagi tarikh dan masa tempatan <code>value</code>.</li>        <li><code>date</code>: Nombor titik apungan kepersisan berganda yang mengandungi tarikh Automasi OLE yang setara.</li>        <li><code>masa</code>: Dinyatakan dalam hari pecahan.</li>        <li><code>tempoh</code>: Dinyatakan dalam hari secara keseluruhan atau pecahan.</li>      </ul>Jika <code>value</code> ialah mana-mana jenis yang lain, ralat dikembalikan.


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; bagi &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; bagi &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; sebanyak &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
