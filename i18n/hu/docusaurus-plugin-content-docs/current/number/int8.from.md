---
title: Int8.From
---

# Int8.From


A megadott érték átalakítása aláírt 8 bites egész számmá.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Egy 8 bites előjeles egész `number` értéket ad vissza a megadott `value` értékből. Ha a megadott `value` `null`, az `Int8.From` függvény visszaadott értéke `null`. Ha a megadott `value` `number` a 8 bites előjeles egész számok tartományában, törtrész nélkül, `value` értéket ad vissza. Ha rendelkezik törtrésszel, a szám a megadott kerekítési mód szerint lesz kerekítve. Az alapértelmezett kerekítési mód a `RoundingMode.ToEven`. Ha `value` bármilyen más típusba tartozik, előbb a `Number.FromText` függvénnyel alakítja át `number` típusú értékre. Az elérhető kerekítési módokkal kapcsolatban lásd: `Number.Round`. Egy nem kötelező `culture` is megadható (például „en-US”).


## Examples

### Example #1
A `"4"` érték átalakítása `number` típusú aláírt 8 bites egész számmá.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
A `"4.5"` érték átalakítása `number` típusú aláírt 8 bites egész számmá a `RoundingMode.AwayFromZero` használatával.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
