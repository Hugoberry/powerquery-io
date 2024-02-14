---
title: Date.ToRecord
---

# Date.ToRecord


Returnerer en post, der indeholder delene fra datoværdien.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Returnerer en post, der indeholder delene fra en bestemt datoværdi, <code>date</code>. <ul>        <li><code>date</code>: En værdi af typen <code>date</code>, som delenes post skal beregnes ud fra.</li>      </ul>


## Examples

### Example #1 
Konvertér værdien af typen &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; til en post, der indeholder delene fra datoværdien.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
