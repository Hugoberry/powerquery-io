---
title: Duration.FromText
---

# Duration.FromText


## Description

Returnerer en varighedsværdi ud fra tekstformlen for forløbet tid (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Returnerer en varighedsværdi ud fra den angivne tekst, <code>text</code>. Følgende formater kan fortolkes ved hjælp af denne funktion:  <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (alle intervaller er inklusive)<br />        ddd: Antal dage.<br />        hh: Antal timer, mellem 0 og 23.<br />        mm: Antal minutter, mellem 0 og 59.<br />        ss: Antal sekunder, mellem 0 og 59.<br />        ff: Brøkdele af sekunder, mellem 0 og 9999999.


## Examples

### Example #1 
Konvertér &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; til en værdi af typen &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
