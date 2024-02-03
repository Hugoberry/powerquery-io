---
title: Duration.FromText
---

# Duration.FromText


## Description

Mengembalikan nilai tempoh daripada bentuk masa berlalu teks (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Mengembalikan nilai tempoh daripada teks yang ditentukan, <code>text</code>. Format berikut boleh diuraikan oleh fungsi ini:  <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Semua julat termasuk nilai minimum dan maksimumnya)<br />        ddd: Bilangan hari.<br />        hh: Bilangan jam, antara 0 dengan 23.<br />        mm: Bilangan minit, antara 0 dengan 59.<br />        ss: Bilangan saat, termasuk 0 dan 59.<br />        ff: Pecahan saat, antara 0 dengan 9999999.


## Examples

### Example #1 
Menukar &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; kepada nilai &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
