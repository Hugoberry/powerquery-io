---
title: Duration.ToRecord
---

# Duration.ToRecord


Devolve um registo que contém as partes da duração.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Devolve um registo que contém as partes do valor de duração, <code>duration</code>.  <ul>        <li><code>duration</code>: um valor <code>duration</code> a partir do qual o registo é criado.</li>      </ul>


## Examples

### Example #1 
Converter &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; num registo dos respetivos componentes, incluindo dias, horas, minutos e segundos, se aplicável.
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
