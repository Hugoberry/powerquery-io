---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Zwraca rekord zawierający części wartości typu date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Zwraca rekord zawierający części danej wartości typu date (<code>date</code>). <ul>        <li><code>date</code>: wartość typu <code>date</code>, na podstawie części której jest tworzony rekord.</li>      </ul>


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; na rekord zawierający części z wartości typu date.
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
