---
title: Duration.ToText
---

# Duration.ToText


## Description

Vraća tekst oblika „d.h:m:s“.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Vraća tekstualnu reprezentaciju u obliku „dan.sat:minuti:sekunde“ date vrednosti trajanja, <code>duration</code>. <ul>        <li><code>duration</code>: <code>Trajanje</code> na osnovu kojeg se izračunava tekstualna reprezentacija.</li>  <li><code>format</code>: <i>[Opcionalno]</i> Ukoliko je zastarelo, dobija se greška ako nije bez vrednosti</li>      </ul>


## Examples

### Example #1 
Konvertovanje &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; u tekstualnu vrednost.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
