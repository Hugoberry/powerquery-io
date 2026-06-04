---
title: List.Random
---

# List.Random


Egy véletlenszerű számokból álló listát ad vissza.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

0 és 1 közötti véletlenszerű számok sorozatát adja vissza, ha meg van adva az előállítani kívánt értékek száma, illetve egy opcionális kezdőérték.

-   `count`: Az előállítani kívánt véletlenszerű értékek száma.
-   `seed`: *(Nem kötelező)* A véletlenszám-generálás kezdőértékeként megadott numerikus érték. Ha kihagyják, a rendszer egy véletlenszerű egyedi számsort állít elő a függvény minden egyes meghívásakor. Ha kezdőértékként meg van adva egy szám, a rendszer a függvény minden egyes meghívásakor ugyanazt a véletlenszerű számsort állítja elő.


## Examples

### Example #1
3 véletlenszerű számból álló lista létrehozása
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
3 véletlenszerű számból álló lista létrehozása kezdeti érték megadásával
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
