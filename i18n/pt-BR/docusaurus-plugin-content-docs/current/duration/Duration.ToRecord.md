---
title: Duration.ToRecord
---

# Duration.ToRecord


Retorna um registro contendo as partes do valor duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Retorna um registro contendo as partes do valor duration, <code>duration</code>.   <ul>        <li><code>duration</code>: um valor <code>duration</code> por meio do qual o registro é criado.</li>      </ul>


## Examples

### Example #1 
Converta &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; em um registro das partes, incluindo dias, horas, minutos e segundos, se aplicável.
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
