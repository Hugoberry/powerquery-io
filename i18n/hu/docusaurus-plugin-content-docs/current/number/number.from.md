---
title: Number.From
---

# Number.From


Számot hoz létre a megadott értékből.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Egy `number` típusú értéket ad vissza a megadott `value` értékből. Egy nem kötelező `culture` is megadható (például, „en-US”). Ha a megadott `value` `null`, a `Number.From` függvény `null` értéket ad vissza. Ha a megadott `value` `number`, a visszaadott érték `value`. A következő típusú értékek konvertálhatók `number` értékre:

-   `text`: Egy `number` érték szöveges alakból. Az általános szöveges formátumok („15”, „3423.10”, „5.0E-10”) használhatók. További részletek: `Number.FromText`.
-   `logical`: 1 `true` esetén, 0 `false` esetén.
-   `datetime`: Egy OLE-automatizálási dátum megfelelőjét tartalmazó kétszeres pontosságú lebegőpontos szám.
-   `datetimezone`: A `value` helyi dátum és idő OLE-automatizálási dátum megfelelőjét tartalmazó kétszeres pontosságú lebegőpontos szám.
-   `date`: Egy OLE-automatizálási dátum megfelelőjét tartalmazó kétszeres pontosságú lebegőpontos szám.
-   `time`: Töredéknapokban kifejezve.
-   `duration`: Egész és töredéknapokban kifejezve.

Ha a `value` más típusú, a függvény hibát ad vissza.


## Examples

### Example #1
A `"4"` `number` típusú értékének lekérése
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
A `#datetime(2020, 3, 20, 6, 0, 0)` `number` típusú értékének lekérése
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Kérje le a `"12.3%"` `number` értékét.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
