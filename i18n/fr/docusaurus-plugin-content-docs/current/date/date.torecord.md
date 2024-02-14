---
title: Date.ToRecord
---

# Date.ToRecord


Retourne un enregistrement contenant des parties de la valeur de date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Retourne un enregistrement qui contient les parties de la valeur de date spécifiée, <code>date</code>. <ul>        <li><code>date</code> : valeur <code>date</code> à partir de laquelle l'enregistrement des parties doit être calculé.</li>      </ul>


## Examples

### Example #1 
Convertit la valeur &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; dans un enregistrement contenant des parties de la valeur de date.
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
