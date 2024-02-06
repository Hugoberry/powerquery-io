---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Indique si cette valeur datetime se produit dans le nombre de semaines suivantes, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de semaines suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>weeks</code> : Nombre de semaines.</li>      </ul>


## Examples

### Example #1 
Détermine si la semaine qui suit l&#39;heure système actuelle tombe pendant les deux prochaines semaines.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
