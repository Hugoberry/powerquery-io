---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Devolve um registo que contém as partes do valor date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Devolve um registo que contém as partes do valor date especificado, <code>date</code>. <ul>        <li><code>date</code>: um valor <code>date</code> a partir do qual o registo das partes correspondentes deverá ser calculado.</li>      </ul>


## Examples

### Example #1 
Converter o valor &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; num registo que contém partes do valor date.
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
