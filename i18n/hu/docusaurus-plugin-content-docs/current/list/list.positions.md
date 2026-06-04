---
title: List.Positions
---

# List.Positions


A bemeneti listához tartozó eltolások listáját adja vissza.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

A megadott bemeneti lista eltolásainak listáját adja vissza.

-   `list`: A bemeneti lista.

Ha a `List.Transform` használatával módosít egy listát, a pozíciók listájának felhasználásával biztosíthatja a hozzáférést a pozícióhoz a transzformáció számára.


## Examples

### Example #1
Az \{1, 2, 3, 4, null, 5\} listán levő értékek eltolásának meghatározása
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Hozzon létre egy táblát, amely a lista alapján minden ügyfélhez hozzárendel egy azonosítót az ügyfél pozíciója szerint.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
