---
title: Duration.ToText
---

# Duration.ToText


## Description

Menghasilkan teks dari format &#34;h.j:m:d&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Menghasilkan representasi tekstual dalam format "day.hour:mins:sec" dari nilai durasi yang diberikan, <code>duration</code>. <ul>        <li><code>duration</code>: <code>Durasi</code> dari representasi tekstual yang dihitung.</li>  <li><code>format</code>: <i>[Opsional]</i> Tidak digunakan lagi, akan mengembalikan kesalahan jika tidak null</li>      </ul>


## Examples

### Example #1 
Mengkonversi &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; ke nilai teks.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
