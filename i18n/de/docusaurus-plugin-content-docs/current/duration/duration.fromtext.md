---
title: Duration.FromText
---

# Duration.FromText


Gibt einen duration-Wert auf der Grundlage von verstrichener Zeit zurück, die im Textformat (d.h:m:s) angegeben wurde.


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Gibt einen duration-Wert auf der Grundlage des angegebenen Texts "<code>text</code>" zurück. Folgende Formate können von dieser Funktion analysiert werden: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Alle Bereiche eingeschlossen)<br />        ddd: Anzahl von Tagen.<br />        hh: Anzahl von Stunden, zwischen 0 und 23.<br />        mm: Anzahl von Minuten, zwischen 0 und 59.<br />        ss: Anzahl von Sekunden, zwischen 0 und 59.<br />        ff: Sekundenbruchteil, zwischen 0 und 9999999.


## Examples

### Example #1 
Konvertiert &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; in einen &lt;code&gt;duration&lt;/code&gt;-Wert.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
