---
title: Duration.FromText
---

# Duration.FromText


## Description

Vrne vrednost trajanja iz besedilnih oblik pretečenega časa (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Vrne vrednost trajanja določenega besedila, <code>text</code>. Ta funkcija omogoča razčlenitev teh oblik zapisov: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Vsi obsegi so vključeni)<br />        ddd: število dni.<br />        hh: število ur, med 0 in 23.<br />        mm: število minut, med 0 in 59.<br />        ss: število sekund, med 0 in 59.<br />        ff: stotinke, med 0 in 9999999.


## Examples

### Example #1 
Pretvorite &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; v vrednost &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
