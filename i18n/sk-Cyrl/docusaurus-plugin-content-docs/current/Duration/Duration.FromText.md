---
title: Duration.FromText
---

# Duration.FromText


## Description

Vráti hodnotu trvania z textových formátov uplynutého času (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Vráti hodnotu trvania zo zadaného textu <code>text</code>. Táto funkcia dokáže analyzovať nasledujúce formáty: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Zahŕňajú sa aj všetky rozsahy)<br />        ddd: Počet dní.<br />        hh: Počet hodín, číslo medzi 0 a 23.<br />        mm: Počet minút, číslo medzi 0 a 59.<br />        ss: Počet sekúnd, číslo medzi 0 a 59.<br />        ff: Zlomky sekúnd, číslo medzi 0 a 9 999 999.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; na hodnotu &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
