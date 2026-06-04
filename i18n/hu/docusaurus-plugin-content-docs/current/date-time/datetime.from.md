---
title: DateTime.From
---

# DateTime.From


Létrehoz egy datetime értéket a megadott értékből.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Egy `datetime` típusú értéket ad vissza a megadott `value` értékből. Egy nem kötelező `culture` is megadható (például, „en-US”). Ha a megadott `value` `null`, a `DateTime.From` függvény `null` értéket ad vissza. Ha a megadott `value` `datetime`, a visszaadott érték `value`. A következő típusú értékek konvertálhatók `datetime` értékre:

-   `text`: Egy `datetime` érték szöveges alakból. További részletek: `DateTime.FromText`.
-   `date`: Egy `datetime` érték, ahol a dátum összetevő `value`, az idő összetevő pedig `12:00:00 AM`.
-   `datetimezone`: A `value` helyi `datetime` megfelelője.
-   `time`: Egy `datetime` érték, ahol a dátum összetevő a `0` OLE-automatizálási dátum megfelelője, az idő összetevő pedig `value`.
-   `number`: A `value` által kifejezett OLE-automatizálási dátum `datetime` megfelelője.

Ha a `value` más típusú, a függvény hibát ad vissza.


## Examples

### Example #1
A `#time(06, 45, 12)` érték konvertálása `datetime` értékre
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
A `#date(1975, 4, 4)` érték konvertálása `datetime` értékre
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
