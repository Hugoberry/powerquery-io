---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Retorna un registre que conté les parts de la durada.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Retorna un registre que conté les parts del valor duration, <code>duration</code>.  <ul>        <li><code>duration</code>: valor <code>duration</code> a partir del qual es crea el registre.</li>      </ul>


## Examples

### Example #1 
Converteix &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; en un registre de les seves parts, que inclouen dies, hores, minuts i segons, si correspon.
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
