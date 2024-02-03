---
title: Table.ToRows
---

# Table.ToRows


## Description

Létrehoz egy listát, amely egy tábla sorértékeinek beágyazott listáit tartalmazza.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Létrehozza a(z) <code>table</code> tábla beágyazott listáinak listáját. Mindegyik listaelem egy-egy belső lista, amely a sorértékeket tartalmazza.


## Examples

### Example #1 
Listát hoz létre a tábla sorértékeiből.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
