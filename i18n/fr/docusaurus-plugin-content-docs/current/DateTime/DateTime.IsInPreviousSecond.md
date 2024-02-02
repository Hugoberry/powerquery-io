---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Indique si cette valeur datetime se produit dans la seconde précédente, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans la seconde précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si la seconde précédant l&#39;heure système actuelle tombe pendant la seconde précédente.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
