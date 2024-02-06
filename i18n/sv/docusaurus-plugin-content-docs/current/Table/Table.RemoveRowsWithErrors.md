---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Returnerar en tabell där de rader från indatatabellen som innehåller ett fel i minst en av cellerna har tagits bort. Om en kolumnlista anges genomsöks bara cellerna i de angivna kolumnerna efter fel.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Returnerar en tabell där de rader från indatatabellen som innehåller ett fel i minst en av cellerna har tagits bort. Om en kolumnlista anges genomsöks bara cellerna i de angivna kolumnerna efter fel.


## Examples

### Example #1 
Ta bor felvärdet från den första raden.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
