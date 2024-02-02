---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Indique si cette valeur datetime se produit dans le nombre de secondes précédentes, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de secondes précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>seconds</code> : Nombre de secondes.</li>      </ul>


## Examples

### Example #1 
Détermine si la seconde précédant l&#39;heure système actuelle tombe pendant les deux secondes précédentes.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
