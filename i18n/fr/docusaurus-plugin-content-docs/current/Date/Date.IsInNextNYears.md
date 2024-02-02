---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Indique si cette valeur datetime se produit dans le nombre d&#39;années suivantes, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l&#39;année actuelle.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le nombre d'années suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'année actuelle.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      <li><code>years</code> : Nombre d'années.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;année qui suit l&#39;heure système actuelle tombe pendant les deux prochaines années.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
