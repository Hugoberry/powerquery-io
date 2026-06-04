---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Substitueix l'interval especificat de files amb les files proporcionades.


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

Substitueix un nombre especificat de files, `count`, a l'entrada `table` amb el `rows` especificat, començant després de la `offset`. El paràmetre `rows` és una llista de registres.

-   `table`: la taula on es duu a terme la substitució.
-   `offset`: el nombre de files que s'han d'ometre abans de dur a terme la substitució.
-   `count`: el nombre de files que s'han de substituir.
-   `rows`: la llista de registres de fila que s'han d'inserir al `table` a la ubicació especificada per `offset`.


## Examples

### Example #1
Començant per la posició 1, substitueix 3 files.
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
