---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Retorna un registre que conté les parts del valor Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Retorna un registre que conté les parts del valor Time proporcionat, <code>time</code>. <ul>        <li><code>time</code>: valor <code>time</code> a partir del qual s'ha de calcular el registre de les seves parts.</li>      </ul>


## Examples

### Example #1 
Converteix el valor &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; en un registre que conté els valors Time.
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
