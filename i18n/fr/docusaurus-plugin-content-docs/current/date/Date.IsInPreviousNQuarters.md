---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Indique si cette valeur datetime se produit dans le nombre de trimestres précédents, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de trimestres précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>quarters</code> : Nombre de trimestres.</li>      </ul>


## Examples

### Example #1 
Détermine si le trimestre qui précède l&#39;heure système actuelle tombe pendant les deux trimestres précédents.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
