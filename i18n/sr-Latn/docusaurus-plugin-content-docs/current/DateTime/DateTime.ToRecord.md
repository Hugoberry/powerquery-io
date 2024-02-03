---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Vraća zapis koji sadrži delove vrednosti datuma i vremena.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Vraća zapis koji sadrži delove date vrednosti datuma i vremena, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Vrednost <code>datetime</code> na osnovu koje se izračunava zapis njenih delova.</li>      </ul>


## Examples

### Example #1 
Konvertovanje vrednosti &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; u zapis koji sadrži vrednosti datuma i vremena.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
