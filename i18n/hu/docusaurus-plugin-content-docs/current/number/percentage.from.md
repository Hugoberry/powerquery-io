---
title: Percentage.From
---

# Percentage.From


Százalékos értéket ad vissza az adott elemből.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Egy `percentage` értéket ad vissza a megadott `value` értékből. Ha a megadott `value` `null`, a `Percentage.From` függvény `null` értéket ad vissza. Ha a megadott `value` `text` értékű egy záró százalék szimbólummal, akkor a konvertált tizedes tört számot adja vissza. Máskülönben a `Number.From` függvény használatával `number` értékre konvertálja. Egy nem kötelező `culture` is megadható (például, „en-US”).


## Examples

### Example #1
Kérje le a `"12.3%"` `percentage` értékét.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
