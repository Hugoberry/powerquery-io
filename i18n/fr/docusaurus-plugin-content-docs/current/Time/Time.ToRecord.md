---
title: Time.ToRecord
---

# Time.ToRecord


Retourne un enregistrement qui contient les parties de la valeur d&#39;heure.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Retourne un enregistrement qui contient les parties de la valeur d'heure spécifiée, <code>time</code>. <ul>        <li><code>time</code> : valeur <code>time</code> à partir de laquelle l'enregistrement des parties doit être calculé.</li>      </ul>


## Examples

### Example #1 
Convertit la valeur &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; dans un enregistrement contenant les valeurs d&#39;heure.
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
