---
title: Date.ToRecord
---

# Date.ToRecord


Restituisce un record contenente le parti del valore date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Restituisce record contenente le parti del valore di date specificato <code>date</code>. <ul>        <li><code>date</code>: valore <code>date</code> da cui deve essere calcolato il record delle parti.</li>      </ul>


## Examples

### Example #1 
Converte il valore &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; in un record contenente le parti del valore date.
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
