---
title: Duration.ToRecord
---

# Duration.ToRecord


Zwraca rekord zawierający części wartości typu duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Zwraca rekord zawierający części wartości typu duration (<code>duration</code>).   <ul>        <li><code>duration</code>: wartość typu <code>duration</code>, na podstawie której tworzony jest rekord.</li>      </ul>


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; na rekord zawierający jej części, w tym dni, godziny, minuty i sekundy.
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
