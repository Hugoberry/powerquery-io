---
title: Double.From
---

# Double.From


Időértéket hoz létre a megadott értékből.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Egy double `number` értéket ad vissza a megadott `value` értékből. Ha a megadott `value` `null`, a `Double.From` függvény `null` értéket ad vissza. Ha a megadott `value` egy `number` a double számok tartományában, `value` értéket ad vissza, más esetben hibát jelez. Ha `value` bármilyen más típusba tartozik,előbb a `Number.FromText` függvénnyel alakítja át `number` típusú értékre. Egy nem kötelező `culture` is megadható (például „en-US”).


## Examples

### Example #1
A `"4"` `number` típusú értékének előállítása.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
