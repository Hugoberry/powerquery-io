---
title: Duration.FromText
---

# Duration.FromText


## Description

Palauttaa kestoarvon tekstimuotoisista kuluneen ajan muodoista (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Palauttaa kestoarvon määritetystä tekstistä <code>text</code>. Tämä funktio voi jäsentää seuraavia muotoja: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Kaikkien arvovälien päätearvot sisältyvät alueisiin)<br />        ddd: päivien määrä.<br />        hh: tuntien määrä, arvo 0–23.<br />        mm: minuuttien määrä, arvo 0–59.<br />        ss: sekuntien määrä, arvo 0–59.<br />        ff: sekunnin murto-osat, arvo 0–9999999.


## Examples

### Example #1 
Muunna &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; &lt;code&gt;duration&lt;/code&gt;-arvoksi.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
