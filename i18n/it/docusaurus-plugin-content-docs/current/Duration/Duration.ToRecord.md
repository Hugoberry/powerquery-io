---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Restituisce un record contenente le parti della durata.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Restituisce un record contenente le parti del valore della durata <code>duration</code>.  <ul>        <li><code>duration</code>: elemento <code>duration</code> da cui viene creato il record.</li>      </ul>


## Examples

### Example #1 
Converte &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; in record composto dalle relative parti, tra cui giorni, ore, minuti e secondi, se applicabile.
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
