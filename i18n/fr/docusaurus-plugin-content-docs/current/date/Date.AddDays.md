---
title: Date.AddDays
---

# Date.AddDays


Ajoute les jours spécifiés à la date.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Retourne le résultat <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> de l'ajout de <code>numberOfDays</code> jours à la valeur <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à laquelle les jours sont ajoutés.</li>      <li><code>numberOfDays</code> : nombre de jours à ajouter.</li>      </ul>


## Examples

### Example #1 
Ajoute 5 jours à la valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
