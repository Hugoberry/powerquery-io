---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Retourne un nombre (entre 0 et 6) indiquant le jour de la semaine de la valeur fournie.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Retourne un nombre (entre 0 et 6) indiquant le jour de la semaine du <code>dateTime</code> fourni.  <ul>        <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code> : Valeur <code>Day</code> indiquant le jour défini comme premier jour de la semaine. Les valeurs autorisées sont Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ou Day.Saturday. Si elle n'est pas spécifiée, une valeur par défaut dépendante de la culture est utilisée.</li>      </ul>


## Examples

### Example #1 
Obtenez le jour de la semaine représenté par lundi 21 février 2011, dimanche étant le premier jour de la semaine.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Obtenez le jour de la semaine représenté par lundi 21 février 2011, lundi étant le premier jour de la semaine.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
