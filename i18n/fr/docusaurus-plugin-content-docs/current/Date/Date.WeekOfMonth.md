---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Retourne un nombre compris entre 1 et 6 qui indique dans quelle semaine du mois cette date se situe.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Retourne un nombre compris entre 1 et 6 qui indique dans quelle semaine du mois de la date <code>dateTime</code> se situe. <ul>        <li><code>dateTime</code>: valeur <code>datetime</code> pour laquelle la semaine du mois est déterminée.</li>      </ul>


## Examples

### Example #1 
Déterminez la semaine du 15 mars 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
