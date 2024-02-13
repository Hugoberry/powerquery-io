---
title: Date.AddWeeks
---

# Date.AddWeeks


Ajoute les semaines spécifiées à la date.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Retourne le résultat <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> de l'ajout de <code>numberOfWeeks</code> semaines à la valeur <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à laquelle les semaines sont ajoutées.</li>      <li><code>numberOfWeeks</code> : nombre de semaines à ajouter.</li>      </ul>


## Examples

### Example #1 
Ajoute 2 semaines à la valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
