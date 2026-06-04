---
title: Logical.From
---

# Logical.From


Létrehoz egy logikai értéket a megadott értékből.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Egy `logical` típusú értéket ad vissza a megadott `value` értékből. Ha a megadott `value` `null`, a `Logical.From` függvény `null` értéket ad vissza. Ha a megadott `value` érték `logical`, a visszaadott érték `value`. A következő típusú értékek konvertálhatók `logical` értékre:

-   `text`: Egy `logical` érték a szöveges értékből, amely `"true"` vagy `"false"` lehet. További részletek: `Logical.FromText`.
-   `number`: `false`, ha a(z) `value` egyenlő `0`\-val, egyéb esetben `true`.

Ha a(z) `value` más típusú, a függvény hibát ad vissza.


## Examples

### Example #1
A `2` érték konvertálása `logical` értékre
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
