---
title: Duration.FromText
---

# Duration.FromText


## Description

Menghasilkan nilai durasi dari format waktu berlalu tekstual (h.j:m:d).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Mengembalikan nilai durasi dari teks yang ditetapkan, <code>text</code>. Format berikut dapat diurai dengan fungsi ini: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Termasuk semua rentang)<br />        ddd: Jumlah hari.<br />        hh: Jumlah jam, antara 0 hingga 23.<br />        mm: Jumlah menit, antara 0 hingga 59.<br />        ss: Jumlah detik, antara 0 hingga 59.<br />        ff: Pecahan detik, antara 0 hingga 9999999.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; ke nilai &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
