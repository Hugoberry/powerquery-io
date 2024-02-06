---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Restituisce record contenente le parti del valore datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Restituisce record contenente le parti del valore datetime specificato <code>dateTime</code>. <ul>        <li><code>dateTime</code>: valore <code>datetime</code> da cui deve essere calcolato il record delle parti.</li>      </ul>


## Examples

### Example #1 
Converte il valore &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; in un record contenente i valori di data e ora.
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
