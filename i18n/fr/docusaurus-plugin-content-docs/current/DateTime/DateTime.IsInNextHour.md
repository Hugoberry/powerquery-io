---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Indique si cette valeur datetime se produit dans l&#39;heure suivante, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l&#39;heure actuelle.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans l'heure suivante, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'heure actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;heure suivant l&#39;heure système actuelle tombe pendant la prochaine heure.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
