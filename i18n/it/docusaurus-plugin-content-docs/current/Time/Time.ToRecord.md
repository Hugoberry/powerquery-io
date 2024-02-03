---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Restituisce un record contenente le parti del valore di ora.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Restituisce un record contenente le parti del valore di ora specificato <code>time</code>. <ul>        <li><code>time</code>: valore <code>time</code> da cui deve essere calcolato il record delle parti.</li>      </ul>


## Examples

### Example #1 
Converte il valore &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; in un record contenente i valori di ora.
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
