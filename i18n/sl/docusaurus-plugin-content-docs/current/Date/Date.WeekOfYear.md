---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Vrne število od 1 do 54, ki kaže, v katerem tednu leta je datum.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Vrne številko od 1 do 54, ki označuje, v katerem tednu leta je datum <code>dateTime</code>. <ul>        <li><code>dateTime</code>: vrednost <code>datetime</code>, za katero bo določen teden v letu.</li>        <li><code>firstDayOfWeek</code>: izbirna vrednost <code>Day.Type</code>, ki označuje, kateri dan je uporabljen za začetek novega tedna (na primer <code>Day.Sunday</code>). Če je ne navedete, je uporabljena privzeta vrednost, značilna za kulturo.</li>      </ul>


## Examples

### Example #1 
Določite, kateri teden v letu vsebuje 27. marec 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Ugotovite, v katerem tednu v letu je datum 27. marec 2011, pri tem pa uporabite ponedeljek kot začetek tedna.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
