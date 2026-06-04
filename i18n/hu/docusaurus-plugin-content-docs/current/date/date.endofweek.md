---
title: Date.EndOfWeek
---

# Date.EndOfWeek


A hét végét adja vissza.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

A következőt tartalmazó hét végét adja vissza: `dateTime`. Ez a függvény egy nem kötelező `Day`, `firstDayOfWeek` értéket is elfogad, amely beállítja a hét első napját ehhez a relatív számításhoz. Az alapértelmezett érték: `Day.Sunday`.

-   `dateTime`: Egy `date`, `datetime` vagy `datetimezone` típusú érték, amelyből a hét utolsó napjának a számítása történik
-   `firstDayOfWeek`: *(Nem kötelező)* Egy `Day.Type` típusú érték, amely a hét első napját jelöli. A lehetséges értékek: `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` és `Day.Saturday`. Az alapértelmezett érték: `Day.Sunday`.


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
