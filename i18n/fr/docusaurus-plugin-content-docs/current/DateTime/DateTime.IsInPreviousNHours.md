---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Indique si cette valeur datetime se produit dans le nombre d&#39;heures précédentes, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l&#39;heure actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre d'heures précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'heure actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>hours</code> : Nombre d'heures.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;heure précédant l&#39;heure système actuelle tombe pendant les deux heures précédentes.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
