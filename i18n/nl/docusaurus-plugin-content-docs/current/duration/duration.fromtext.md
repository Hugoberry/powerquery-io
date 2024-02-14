---
title: Duration.FromText
---

# Duration.FromText


Retourneert een duurwaarde uit tekst over verstreken tijd (d.u:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Hiermee wordt een duur-waarde geretourneerd van de opgegeven tekst, <code>text</code>. De volgende indelingen kunnen worden geparseerd door deze functie: <ul> <li>(-)hh:mm(:ss(.ff)) </li> <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul> <br /> (alle bereiken zijn inclusief)<br /> ddd: aantal dagen.<br /> hh: aantal uur, tussen 0 en 23.<br /> mm: aantal minuten, tussen 0 en 59.<br /> ss: aantal seconden, tussen 0 en 59.<br /> ff: fractie van seconden, tussen 0 en 9999999.


## Examples

### Example #1 
Zet &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; om naar een &lt;code&gt;duration&lt;/code&gt;waarde.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
