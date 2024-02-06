---
title: Duration.ToRecord
---

# Duration.ToRecord


Retourne un enregistrement contenant les parties de la durée.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Retourne un enregistrement contenant les parties de la valeur de durée, <code>duration</code>.  <ul>        <li><code>duration</code> : <code>duration</code> à partir de laquelle l'enregistrement est créé.</li>      </ul>


## Examples

### Example #1 
Convertit &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; dans un enregistrement des parties comprenant les jours, les heures, les minutes et les secondes, le cas échéant.
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
