---
title: Time.From
---

# Time.From


Időértéket hoz létre a megadott értékből.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Egy `time` típusú értéket ad vissza a megadott `value` értékből. Egy nem kötelező `culture` is megadható (például, „en-US”). Ha a megadott `value` `null`, a `Time.From` függvény `null` értéket ad vissza. Ha a megadott `value` érték `time`, a visszaadott érték `value`. A következő típusú értékek konvertálhatók `time` értékre:

-   `text`: Egy `time` érték szöveges alakból. További részletek: `Time.FromText`.
-   `datetime`: A `value` idő összetevője.
-   `datetimezone`: A `value` helyi datetime megfelelőjének idő összetevője.
-   `number`: A `value` által kifejezett töredéknapok számának megfelelő `time` érték. Ha a `value` negatív, illetve nagyobb vagy egyenlő 1-gyel, a függvény hibát ad vissza.

Ha a `value` más típusú, a függvény hibát ad vissza.


## Examples

### Example #1
A `0.7575` érték konvertálása `time` értékre
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
A `#datetime(1899, 12, 30, 06, 45, 12)` érték konvertálása `time` értékre
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
