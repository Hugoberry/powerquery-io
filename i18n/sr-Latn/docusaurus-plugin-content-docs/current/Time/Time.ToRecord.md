---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Vraća zapis koji sadrži delove vrednosti vremena.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Vraća zapis koji sadrži delove date vrednosti vremena, <code>time</code>. <ul>        <li><code>time</code>: Vrednost <code>time</code> na osnovu koje se izračunava zapis njenih delova.</li>      </ul>


## Examples

### Example #1 
Konvertovanje vrednosti &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; u zapis koji sadrži vrednosti vremena.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
