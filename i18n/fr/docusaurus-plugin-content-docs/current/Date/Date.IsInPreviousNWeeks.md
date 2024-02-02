---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Indique si cette valeur datetime se produit dans le nombre de semaines précédentes, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de semaines précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>weeks</code> : Nombre de semaines.</li>      </ul>


## Examples

### Example #1 
Détermine si la semaine qui précède l&#39;heure système actuelle tombe pendant les deux semaines précédentes.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
