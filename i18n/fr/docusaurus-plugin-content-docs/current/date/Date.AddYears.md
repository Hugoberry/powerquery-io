---
title: Date.AddYears
---

# Date.AddYears


Ajoute les années spécifiées à la date.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Retourne le résultat <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> de l'ajout de <code>numberOfYears</code> à une valeur <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à laquelle les années sont ajoutées.</li>        <li><code>numberOfYears</code> : nombre d'années à ajouter.</li>      </ul>


## Examples

### Example #1 
Ajoute 4 années à la valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Ajoute 10 années à la valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date et l&#39;heure 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
