---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Retorna un registre que conté parts del valor date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Retorna un registre que conté les parts del valor date proporcionat, <code>date</code>. <ul>        <li><code>date</code>: valor <code>date</code> a partir del qual s'ha de calcular el registre de les seves parts.</li>      </ul>


## Examples

### Example #1 
Converteix el valor &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; en un registre que conté parts del valor date.
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
