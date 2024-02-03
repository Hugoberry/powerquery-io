---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Devolve un rexistro que contén partes do valor de data.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Devolve un rexistro que contén as partes do valor date indicado, <code>date</code>. <ul>        <li><code>date</code>: un valor <code>date</code> a partir do que se debe calcular o rexistro das súas partes.</li>      </ul>


## Examples

### Example #1 
Converter o valor &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; nun rexistro que contén partes do valor de data.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
