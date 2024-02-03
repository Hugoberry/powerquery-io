---
title: Number.FromText
---

# Number.FromText


## Description

Luo lukuja tavallisista tekstimuodoista (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Palauttaa <code>number</code>-arvon annetusta tekstiarvosta <code>text</code>. <ul>  <li><code>text</code>: lukuarvon tekstiesitys. Esityksen on oltava tavallisessa lukumuodossa, kuten 15, 3,423.10 tai 5.0E-10.</li>  <li><code>culture</code>: valinnainen maa-asetus, joka hallitsee sitä, miten <code>text</code> tulkitaan (esimerkiksi en-US).</li> </ul>


## Examples

### Example #1 
Hae luvun &lt;code&gt;&#34;4&#34;&lt;/code&gt; lukuarvo.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hae luvun &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; lukuarvo.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
