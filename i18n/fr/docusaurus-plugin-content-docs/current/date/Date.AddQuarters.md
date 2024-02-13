---
title: Date.AddQuarters
---

# Date.AddQuarters


Ajoute les trimestres spécifiés à la date.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Retourne le résultat <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> de l'ajout de <code>numberOfQuarters</code> trimestres à la valeur <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à laquelle les trimestres sont ajoutés.</li>      <li><code>numberOfQuarters</code> : nombre de trimestres à ajouter.</li>      </ul>


## Examples

### Example #1 
Ajoute 1 trimestre à la valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
