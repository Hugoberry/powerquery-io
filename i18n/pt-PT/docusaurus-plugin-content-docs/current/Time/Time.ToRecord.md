---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Devolve um registo que contém as partes do valor de Hora.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Devolve um registo que contém as partes do valor de Hora especificado, <code>time</code>. <ul>        <li><code>time</code>: um valor <code>time</code> a partir do qual o registo das partes correspondentes deverá ser calculado.</li>      </ul>


## Examples

### Example #1 
Converter o valor &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; num registo que contém os valores de Hora.
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
