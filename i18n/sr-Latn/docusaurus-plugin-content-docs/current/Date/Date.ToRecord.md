---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Vraća zapis koji sadrži delove vrednosti datuma.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Vraća zapis koji sadrži delove date vrednosti datuma, <code>date</code>. <ul>        <li><code>date</code>: Vrednost <code>date</code> na osnovu koje se izračunava zapis njenih delova.</li>      </ul>


## Examples

### Example #1 
Konvertovanje vrednosti &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; u zapis koji sadrži delove vrednosti datuma.
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
