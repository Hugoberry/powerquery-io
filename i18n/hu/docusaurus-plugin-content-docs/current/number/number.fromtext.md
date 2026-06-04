---
title: Number.FromText
---

# Number.FromText


Számot hoz létre az általános szöveges formátumokból ("15", "3423,10", "5,0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Egy `number` értéket ad vissza a `text` szöveges értékből.

-   `text`: Egy számérték szöveges megjelenítése. A megjelenítésnek általános számformátumban kell történnie. Például: „15”, „3,423.10”, „5.0E-10”.
-   `culture`: Egy nem kötelező paraméter a kulturális környezetre vonatkozóan, amely szabályozza a `text` értelmezési módját (például, „en-US”).


## Examples

### Example #1
A `"4"` számértékének előállítása
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Az `"5.0e-10"` számértékének előállítása
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
