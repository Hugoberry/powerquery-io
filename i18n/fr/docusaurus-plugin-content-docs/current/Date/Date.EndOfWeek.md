---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Renvoie la fin de la semaine.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Renvoie la fin de la semaine qui contient <code>dateTime</code>.    Cette fonction prend une valeur <code>Day</code> facultative, <code>firstDayOfWeek</code>, à définir comme premier jour de la semaine pour ce calcul relatif. La valeur par défaut est <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code> : une valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à partir de laquelle le dernier jour de la semaine est calculé</li>        <li><code>firstDayOfWeek</code> : <i>[Facultatif]</i> une valeur <code>Day.Type</code> représentant le premier jour de la semaine. Les valeurs possibles sont <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> et <code>Day.Saturday.</code>. La valeur par défaut est <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Obtient la fin de la semaine pour 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Obtient la fin de semaine pour 5/17/2011 05:00:00 PM -7:00, avec dimanche comme premier jour de la semaine.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
