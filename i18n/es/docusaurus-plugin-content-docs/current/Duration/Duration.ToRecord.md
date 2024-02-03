---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Devuelve un registro que contiene los elementos de la duración.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Devuelve un registro que contiene los elementos del valor duration, <code>duration</code>.  <ul>        <li><code>duration</code>: un valor <code>duration</code> a partir del que se creará el registro.</li>      </ul>


## Examples

### Example #1 
Convertir &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; en un registro de sus elementos incluidos los días, horas, minutos y segundos, si corresponde.
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
