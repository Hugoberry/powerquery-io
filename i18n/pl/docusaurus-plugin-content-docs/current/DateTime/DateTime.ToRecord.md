---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Zwraca rekord zawierający części wartości typu datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Zwraca rekord zawierający części danej wartości typu datetime (<code>dateTime</code>). <ul>        <li><code>dateTime</code>: wartość typu <code>datetime</code>, na podstawie części której jest tworzony rekord.</li>      </ul>


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; na rekord zawierający wartości daty i godziny.
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
