---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Retorna un nombre (del 0 al 6) que indica el dia de la setmana del valor proporcionat.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Retorna un nombre (del 0 al 6) que indica el dia de la setmana del valor proporcionat (<code>dateTime</code>).  <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: valor <code>Day</code> que indica quin dia hauria de considerar-se el primer de la setmana. Els valors permesos són "Day.Sunday", "Day.Monday", "Day.Tuesday", "Day.Wednesday", "Day.Thursday", "Day.Friday" o "Day.Saturday". Si no se n'especifica cap, s'utilitzarà un valor per defecte que dependrà de la referència cultural.</li>      </ul>


## Examples

### Example #1 
Definiu el dia de la setmana com a &#34;Dilluns, 21 de febrer del 2011&#34; i establiu que el diumenge sigui el primer dia de la setmana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Definiu el dia de la setmana com a &#34;Dilluns, 21 de febrer del 2011&#34; i establiu que el dilluns sigui el primer dia de la setmana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
