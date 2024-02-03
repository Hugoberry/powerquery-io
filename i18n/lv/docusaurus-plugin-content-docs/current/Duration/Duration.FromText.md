---
title: Duration.FromText
---

# Duration.FromText


## Description

Atgriež ilguma vērtību no teksta pagājušā laika formām (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Atgriež ilguma vērtību <code>text</code> no norādītā teksta. Ar šo funkciju var parsēt tālāk uzskaitītos formātus. <ul>        <li>(-)hh:mm(:ss(,ff)) </li>        <li>(-)ddd(.hh:mm(:ss(,ff))) </li> </ul>        <br />        (Visi diapazoni ir ietveroši.)<br />        ddd: dienu skaits.<br />        hh: stundu skaits no 0 līdz 23.<br />        mm: minūšu skaits no 0 līdz 59.<br />        ss: sekunžu skaits no 0 līdz 59.<br />        ff: sekundes daļa no 0 līdz 9999999.


## Examples

### Example #1 
Pārveidojiet &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; par &lt;code&gt;duration&lt;/code&gt; vērtību.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
