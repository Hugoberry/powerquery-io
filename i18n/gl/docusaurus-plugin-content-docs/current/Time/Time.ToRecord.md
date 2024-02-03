---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Devolve un rexistro que contén partes do valor de hora.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Devolve un rexistro que contén as partes do valor Time indicado, <code>time</code>. <ul>        <li><code>time</code>: un valor <code>time</code> a partir do que se debe calcular o rexistro das súas partes.</li>      </ul>


## Examples

### Example #1 
Converter o valor &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; nun rexistro que contén os valores de hora.
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
