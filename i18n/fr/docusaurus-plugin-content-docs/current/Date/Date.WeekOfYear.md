---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Retourne un nombre compris entre 1 et 54 qui indique dans quelle semaine de l&#39;année cette date se situe.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Retourne un nombre compris entre 1 et 54 qui indique la semaine de l'année dans laquelle tombe la date <code>dateTime</code>. <ul>        <li><code>dateTime</code> : Une valeur <code>datetime</code> pour laquelle la semaine de l'année est déterminée.</li>        <li><code>firstDayOfWeek</code> : Une valeur<code>Day.Type</code> facultative indiquant le jour qui marque le début d'une nouvelle semaine (par exemple, <code>Day.Sunday</code>). Si elle n'est pas spécifiée, une valeur par défaut dépendante de la culture est utilisée.</li>      </ul>


## Examples

### Example #1 
Déterminez quelle semaine de l’année contient le 27 mars 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Déterminez quelle semaine de l’année contient le 27 mars 2011, en utilisant lundi comme début de semaine.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
