---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Retorna un nombre de l'1 al 54 que indica en quina setmana de l'any cau aquesta data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Retorna un número entre l'1 i el 54 que indica en quina setmana de l'any cau la data, `dateTime`.

-   `dateTime`: valor `datetime` per al qual es determina la setmana de l'any.
-   `firstDayOfWeek`: valor `Day.Type` opcional que indica quin dia es considera l'inici d'una setmana nova (per exemple, `Day.Sunday`). Si no s'especifica, s'utilitza un valor per defecte que depèn de la referència cultural.


## Examples

### Example #1
Determina quina setmana de l'any conté el 27 de març del 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Determina quina setmana de l'any conté el dia 27 de març de 2011, utilitzant el dilluns com a inici de la setmana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
