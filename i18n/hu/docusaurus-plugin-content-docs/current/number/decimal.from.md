---
title: Decimal.From
---

# Decimal.From


Decimális értéket hoz létre a megadott értékből.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Egy tizedes tört `number` értéket ad vissza a megadott `value` értékből. Ha a megadott `value` `null`, a `Decimal.From` függvény `null` értéket ad vissza. Ha a megadott `value` egy `number` a tizedes törtek tartományában, `value` értéket ad vissza, más esetben hibát jelez. Ha `value` bármilyen más típusba tartozik,előbb a `Number.FromText` függvénnyel alakítja át `number` típusú értékre. Egy nem kötelező `culture` is megadható (például „en-US”).


## Examples

### Example #1
A `"4.5"` decimális `number` típusú értékének előállítása.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
