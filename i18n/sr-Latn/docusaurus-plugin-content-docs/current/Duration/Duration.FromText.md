---
title: Duration.FromText
---

# Duration.FromText


## Description

Vraća vrednost trajanja od tekstualnih oblika proteklog vremena (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Vraća vrednost trajanja iz navedenog teksta, <code>text</code>. Ova funkcija može da raščlanjuje sledeće formate: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Svi opsezi su uključeni)<br />        ddd: Broj dana.<br />        hh: Broj časova, između 0 i 23.<br />        mm: Broj minuta, između 0 i 59.<br />        ss: Broj sekundi, između 0 i 59.<br />        ff: Delovi sekundi, između 0 i 9999999.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; u vrednost &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
