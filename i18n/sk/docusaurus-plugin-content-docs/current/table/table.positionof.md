---
title: Table.PositionOf
---

# Table.PositionOf


Vráti pozíciu alebo pozície riadka v rámci tabuľky.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Vráti pozíciu riadka prvého výskytu hodnoty `row` v zadanej tabuľke `table`. Vráti hodnotu -1, ak sa nenájde žiadny výskyt.

-   `table`: Vstupná tabuľka.
-   `row`: Riadok v tabuľke, ktorého pozícia sa má nájsť.
-   `occurrence`: *(Voliteľné)* Určuje, ktoré výskyty riadka sa majú vrátiť.
-   `equationCriteria`: *(Voliteľné)* Riadi porovnávanie medzi riadkami tabuľky.


## Examples

### Example #1
Nájdite pozíciu prvého výskytu záznamu \[a = 2, b = 4\] v tabuľke `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Nájdite pozíciu druhého výskytu záznamu \[a = 2, b = 4\] v tabuľke `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Nájdite pozíciu všetkých výskytov záznamu \[a = 2, b = 4\] v tabuľke `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
