---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Vervangt het opgegeven bereik rijen door de aangeleverde rij of rijen.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Vervangt het opgegeven aantal rijen, `count`, in de invoer `table` door de opgegeven `rows`, te beginnen na de `offset`. De parameter `rows` is een lijst met records.

-   `table`: de tabel waar de vervanging wordt uitgevoerd.
-   `offset`: het aantal rijen dat moet worden overgeslagen voordat er wordt vervangen.
-   `count`: het aantal rijen dat u wilt vervangen.
-   `rows`: de lijst met rijrecords die moet worden ingevoegd in de `table` op de locatie die wordt opgegeven door de `offset`.


## Examples

### Example #1
Vanaf positie 1 drie rijen vervangen.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
