---
title: Currency.From
---

# Currency.From


Az adott értékből képzett pénznemértéket ad vissza.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Egy `currency` értéket ad vissza a megadott `value` értékből. Ha a megadott `value` `null`, a `Time.From` függvény `null` értéket ad vissza. Ha az adott `value` a pénznem tartományán belüli `number` érték, a `value` tört részét a rendszer 4 tizedesjegyig kerekíti és adja vissza. Ha `value` bármilyen más típusba tartozik, előbb a `Number.FromText` függvénnyel alakítja át `number` típusú értékre. A pénznem érvényes tartománya: `-922,337,203,685,477.5808` – `922,337,203,685,477.5807`. Az elérhető kerekítési módokkal kapcsolatban lásd: `Number.Round`. Az alapértelmezett érték: `RoundingMode.ToEven`. Egy nem kötelező `culture` is megadható (például, „en-US”).


## Examples

### Example #1
Az `1,23455`\-ös érték `currency` értékének lekérése.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Szerezze be az `"1.23455"` értékű `currency` értéket a `RoundingMode.Down` kód használatával.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
