---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Indique si cette valeur datetime se produit dans le nombre de mois suivants, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de mois suivants, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>months</code> : Nombre de mois.</li>      </ul>


## Examples

### Example #1 
Détermine si le mois qui suit l&#39;heure système actuelle tombe pendant les deux mois suivants.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
