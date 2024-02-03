---
title: Duration.ToText
---

# Duration.ToText


## Description

Mengembalikan teks dari bentuk &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Mengembalikan perwakilan teks dalam bentuk "day.hour:mins:sec" bagi nilai tempoh yang diberikan, <code>duration</code>. <ul>        <li><code>duration</code>: <code>Tempoh</code> yang digunakan untuk mengira perwakilan teks.</li>  <li><code>format</code>: <i>[Optional]</i> Ditamatkan, akan menyebabkan ralat jika bukan nol</li>      </ul>


## Examples

### Example #1 
Menukar &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; menjadi nilai teks.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
