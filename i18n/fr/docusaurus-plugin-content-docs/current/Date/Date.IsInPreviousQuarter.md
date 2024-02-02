---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Indique si cette valeur datetime se produit dans le trimestre précédent, par rapport à la date et l&#39;heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Indique si la valeur datetime <code>dateTime</code> donnée se produit dans le trimestre précédent, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.      <ul>      <li><code>dateTime</code> : Valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si le trimestre précédent l&#39;heure système actuelle correspond au trimestre précédent.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
