---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Retorna un nombre de l&#39;1 al 54 que indica en quina setmana de l&#39;any cau aquesta data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Retorna un número entre l'1 i el 54 que indica en quina setmana de l'any cau la data, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: valor <code>datetime</code> per al qual es determina la setmana de l'any.</li>        <li><code>firstDayOfWeek</code>: valor <code>Day.Type</code> opcional que indica quin dia es considera l'inici d'una setmana nova (per exemple, <code>Day.Sunday</code>). Si no s'especifica, s'utilitza un valor per defecte que depèn de la referència cultural.</li>      </ul>


## Examples

### Example #1 
Determina quina setmana de l&#39;any conté el 27 de març del 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Determina quina setmana de l&#39;any conté el dia 27 de març de 2011, utilitzant el dilluns com a inici de la setmana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
