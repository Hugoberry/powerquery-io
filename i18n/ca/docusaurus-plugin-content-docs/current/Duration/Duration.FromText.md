---
title: Duration.FromText
---

# Duration.FromText


## Description

Retorna un valor duration a partir de formes textuals del temps transcorregut (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Retorna un valor de durada a partir del text especificat, <code>text</code>. Els formats següents es poden analitzar amb aquesta funció: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Tots els intervals són inclusius)<br />        ddd: nombre de dies.<br />        hh: nombre d'hores, entre 0 i 23.<br />        mm: nombre de minuts, entre 0 i 59.<br />        ss: nombre de segons, entre 0 i 59.<br />        ff: fraccions de segon, entre 0 i 9999999.


## Examples

### Example #1 
Converteix &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; en un valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
