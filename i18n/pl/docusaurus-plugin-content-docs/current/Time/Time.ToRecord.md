---
title: Time.ToRecord
---

# Time.ToRecord


Zwraca rekord zawierający części wartości typu time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Zwraca rekord zawierający części danej wartości typu time (<code>time</code>). <ul>        <li><code>time</code>: wartość typu <code>time</code>, na podstawie części której jest tworzony rekord.</li>      </ul>


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; na rekord zawierający wartości godziny.
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
