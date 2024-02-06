---
title: Time.ToRecord
---

# Time.ToRecord


Devuelve un registro que contiene los elementos del valor Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Devuelve un registro que contiene los elementos del valor Time especificado, <code>time</code>. <ul>        <li><code>time</code>: un valor <code>time</code> a partir del cual se calculará el registro de sus partes.</li>      </ul>


## Examples

### Example #1 
Convertir el valor &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; en un registro que contenga valores Time.
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
