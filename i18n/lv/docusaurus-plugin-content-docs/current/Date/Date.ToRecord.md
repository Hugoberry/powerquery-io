---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Atgriež ierakstu, kurā ir datuma vērtības daļas.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Atgriež ierakstu, kurā ir daļas no norādītās datuma vērtības <code>date</code>. <ul>        <li><code>date</code>: <code>date</code> vērtība, no kuras tiek aprēķināts tās daļu ieraksts.</li>      </ul>


## Examples

### Example #1 
Pārveidojiet vērtību &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; par ierakstu, kas ietver daļas no datuma vērtības.
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
