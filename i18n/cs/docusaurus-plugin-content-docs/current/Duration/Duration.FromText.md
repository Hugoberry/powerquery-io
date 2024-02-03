---
title: Duration.FromText
---

# Duration.FromText


## Description

Vrátí hodnotu duration z textového formátu uplynulého času (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Vrátí hodnotu trvání z předané textové hodnoty <code>text</code>. Pomocí této funkce lze analyzovat následující formáty: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd.hh:mm(:ss(.ff)) </li> </ul>        <br />        (Všechny rozsahy jsou včetně krajních hodnot)<br />        ddd: Počet dnů.<br />        hh: Počet hodin, mezi 0 a 23.<br />        mm: Počet minut, mezi 0 a 59.<br />        ss: Počet sekund, mezi 0 a 59.<br />        ff: Část sekundy, mezi 0 a 9999999.


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; na hodnotu &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
