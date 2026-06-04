---
title: Single.From
---

# Single.From


A megadott érték átalakítása egyszeres pontosságú számmá.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Egy single `number` értéket ad vissza a megadott `value` értékből. Ha a megadott `value` `null`, a `Single.From` függvény `null` értéket ad vissza. Ha a megadott `value` egy `number` a single számok tartományában, `value` értéket ad vissza, más esetben hibát jelez. Ha `value` bármilyen más típusba tartozik,előbb a `Number.FromText` függvénnyel alakítja át `number` típusú értékre. Egy nem kötelező `culture` is megadható (például „en-US”).


## Examples

### Example #1
A `"1.5"` egyszeres `number` típusú értékének előállítása.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
