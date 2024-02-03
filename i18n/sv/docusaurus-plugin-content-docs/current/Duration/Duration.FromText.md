---
title: Duration.FromText
---

# Duration.FromText


## Description

Returnerar ett varaktighetsvärde från förfluten tid i textformat (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Returnerar ett varaktighetsvärde från den angivna texten, <code>text</code>. Följande format kan parsas av den här funktionen: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Alla intervall är inkluderande)<br />        ddd: Antal dagar.<br />        hh: Antal timmar, mellan 0 och 23.<br />        mm: Antal minuter, mellan 0 och 59.<br />        ss: Antal sekunder, mellan 0 och 59.<br />        ff: Delar av sekunder, mellan 0 och 9999999.


## Examples

### Example #1 
Konvertera &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; till ett &lt;code&gt;duration&lt;/code&gt;-värde.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
