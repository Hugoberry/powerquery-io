---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Retorna un nombre de l&#39;1 al 6 que indica en quina setmana del mes cau aquesta data.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Retorna un nombre de l'1 al 6 que indica en quina setmana de l'any cau la data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: valor <code>datetime</code> per al qual es determina la setmana del mes.</li>      </ul>


## Examples

### Example #1 
Determina en quina setmana de març cau el dia 15 el 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
