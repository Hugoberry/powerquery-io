---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Indique si cette valeur datetime se produit dans le nombre de secondes suivantes, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre de secondes suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>seconds</code> : Nombre de secondes.</li>      </ul>


## Examples

### Example #1 
Détermine si la seconde qui suit l&#39;heure système actuelle tombe pendant les deux prochaines secondes.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
