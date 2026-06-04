---
title: Number.FromText
---

# Number.FromText


Sukuriami skaičiai iš įprasto teksto formatų („15“, „3,423.10“, „5.0E-10“).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Pateikiama `number` reikšmė iš nurodytos tekstinės `text` reikšmės.

-   `text`: tekstinė skaičiaus reikšmės pateiktis. Pateiktis turi būti įprasto skaičių formato, pvz., „15“, „3,423.10“ arba „5.0E-10“.
-   `culture`: pasirinktinė kultūra, kuria valdoma, kaip aiškinamas `text` (pvz., „en-US“).


## Examples

### Example #1
Gaukite `"4"` skaičiaus reikšmę.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Gaukite `"5.0e-10"` skaičiaus reikšmę.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
