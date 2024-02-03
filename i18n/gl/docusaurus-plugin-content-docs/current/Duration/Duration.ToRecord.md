---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Devolve un rexistro que contén as partes da duración.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Devolve un rexistro que contén as partes do valor duration, <code>duration</code>.  <ul>        <li><code>duration</code>: un valor <code>duration</code> desde o que se crea o rexistro.</li>      </ul>


## Examples

### Example #1 
Converter &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; nun rexistro das súas partes, incluíndo días, horas, minutos e segundos, se é aplicable.
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
