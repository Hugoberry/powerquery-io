---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Indique si cette valeur datetime se produit dans le nombre de minutes suivantes, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de minutes suivantes, par rapport à la date et l'heure actuelles du système. Notez que la fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>minutes</code> : Nombre de minutes.</li>      </ul>


## Examples

### Example #1 
Détermine si la minute qui suit l&#39;heure système actuelle tombe pendant les deux prochaines minutes.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
