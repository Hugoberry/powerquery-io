---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Returnează o înregistrare ce conţine părţi din valoarea pentru dată.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Returnează o înregistrare care conține părți din valoarea dată calendaristică furnizată, <code>date</code>. <ul>        <li><code>date</code>: o valoare <code>date</code> pentru care urmează să fie calculată înregistrarea părților sale.</li>      </ul>


## Examples

### Example #1 
Convertiţi valoarea &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; într-o înregistrare ce conţine părţi din valoarea date.
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
