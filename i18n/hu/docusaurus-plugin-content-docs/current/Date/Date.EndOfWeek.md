---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

A hét végét adja vissza.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

A következőt tartalmazó hét végét adja vissza: <code>dateTime</code>.    Ez a függvény egy nem kötelező <code>firstDayOfWeek</code> <code>Day</code> értéket is elfogad, amely beállítja a hét első napját ehhez a relatív számításhoz. Az alapértelmezett érték: <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyből a hét utolsó napjának a számítása történik.</li>        <li><code>firstDayOfWeek</code>: <i>[Nem kötelező]</i> Egy <code>Day.Type</code> típusú érték, amely a hét első napját jelöli. A lehetséges értékek: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> és <code>Day.Saturday.</code>. Az alapértelmezett érték: <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
A 2011. 05. 14. által jelölt hét végének megállapítása
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
A 2011. 05. 17., 17:00:00 -7:00 által jelölt hét végének megállapítása, ha a hét első napja a vasárnap
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
