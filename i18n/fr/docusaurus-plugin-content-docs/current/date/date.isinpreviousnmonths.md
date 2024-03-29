---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Indique si cette valeur datetime se produit dans le nombre de mois précédents, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de mois précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>months</code> : Nombre de mois.</li>      </ul>


## Examples

### Example #1 
Détermine si le mois qui précède l&#39;heure système actuelle tombe pendant les deux mois précédents.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
