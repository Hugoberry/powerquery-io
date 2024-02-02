---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Indique si cette valeur datetime se produit dans le trimestre suivant, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le trimestre suivant, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si le trimestre suivant l&#39;heure système actuelle correspond au trimestre suivant.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
