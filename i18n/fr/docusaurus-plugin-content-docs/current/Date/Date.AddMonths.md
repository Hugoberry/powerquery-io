---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Ajoute les mois spécifiés à la date.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Retourne le résultat <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> de l'ajout de <code>numberOfMonths</code> mois à la valeur <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à laquelle les mois sont ajoutés.</li>        <li><code>numberOfMonths</code> : nombre de mois à ajouter.</li>      </ul>


## Examples

### Example #1 
Ajoute 5 mois à la valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Ajoute 18 mois à la valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date et l&#39;heure 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
