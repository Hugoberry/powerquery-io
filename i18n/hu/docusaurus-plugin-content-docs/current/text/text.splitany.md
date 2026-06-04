---
title: Text.SplitAny
---

# Text.SplitAny


Szöveges értékek listáját adja vissza, amelyet az elválasztóban szereplő bármely karakternél való felosztással állít elő.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Szöveges értékek listáját adja vissza, amely egy szöveges érték felosztásából származik az elválasztó karakterben megadott bármely karakter alapján.

-   `text`: A felosztandó szöveges érték.
-   `separators`: A szöveg felosztásához használt elválasztó karakterek.


## Examples

### Example #1
Lista létrehozása a megadott szövegből a megadott elválasztó karakterek használatával.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
