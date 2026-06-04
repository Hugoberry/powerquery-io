---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Vráti pozíciu alebo pozície niektorého zo zadaných riadkov v rámci tabuľky.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Vráti pozície riadkov z pozície `table` prvého výskytu zoznamu hodnôt `rows`. Vráti hodnotu -1, ak sa nenájde žiadny výskyt.

-   `table`: Vstupná tabuľka.
-   `rows`: Zoznam riadkov v tabuľke, ktorých pozície sa majú nájsť.
-   `occurrence`: *(Voliteľné)* Určuje, ktoré výskyty riadka sa majú vrátiť.
-   `equationCriteria`: *(Voliteľné)* Riadi porovnávanie medzi riadkami tabuľky.


## Examples

### Example #1
Nájdite pozíciu prvého výskytu záznamu \[a = 2, b = 4\] alebo \[a = 6, b = 8\] v tabuľke `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Nájdite pozíciu všetkých výskytov záznamu \[a = 2, b = 4\] alebo \[a = 6, b = 8\] v tabuľke `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
