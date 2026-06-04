---
title: Value.FromText
---

# Value.FromText


Létrehoz egy szigorú típusmeghatározású értéket egy szöveges alakból.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekódol egy értéket egy szöveges kijelentésből, és megfelelő típusú értékként értelmezi.

-   `text`: Az értelmezendő szöveg.
-   `culture`: (Nem kötelező) A szöveg értelmezéséhez használt adott kulturális környezet (például „en-US”).

Ez a függvény szöveges értéket fogad, és visszaad egy `number`, `logical`, `null`, `datetime`, `duration` vagy `text` típusú értéket. Az üres szöveges értéket a rendszer `null` értékként értelmezi.


## Examples

### Example #1
Számot jelölő szöveg átalakítása a megfelelő számértékre.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Százalékértéket jelölő szöveg átalakítása a megfelelő számértékre.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Francia euróértéket jelölő szöveg átalakítása a megfelelő számértékre.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Német dátumot és időt jelölő szöveg átalakítása a megfelelő dátum- és időértékre.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
