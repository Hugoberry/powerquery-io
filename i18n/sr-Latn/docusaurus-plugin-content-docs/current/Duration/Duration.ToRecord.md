---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Vraća zapis koji sadrži delove trajanja.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Vraća zapis koji sadrži delove vrednosti trajanja, <code>duration</code>.  <ul>        <li><code>duration</code>: Element <code>duration</code> iz koga se zapis kreira.</li>      </ul>


## Examples

### Example #1 
Konvertovanje &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; u zapis njegovih delova, uključujući dane, sate, minute i sekunde ako je primenjivo.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
