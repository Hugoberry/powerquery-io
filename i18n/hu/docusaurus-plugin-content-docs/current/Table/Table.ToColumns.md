---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Létrehoz egy listát, amely egy tábla oszlopértékeinek beágyazott listáit tartalmazza.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Létrehozza a(z) <code>table</code> tábla beágyazott listáinak listáját. Mindegyik listaelem egy-egy belső lista, amely az oszlopértékeket tartalmazza.


## Examples

### Example #1 
Listát hoz létre a tábla oszlopértékeiből.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
