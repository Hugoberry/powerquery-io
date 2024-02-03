---
title: Table.FromRecords
---

# Table.FromRecords


## Description

Ierakstu saraksts tiek pārvērsts tabulā.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Ierakstu saraksts <code>records</code> tiek pārvērsts tabulā.


## Examples

### Example #1 
Izveidot tabulu no ierakstiem, kā kolonnu nosaukumus izmantojot ierakstu lauku nosaukumus.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Izveidot tabulu no ierakstiem ar tipizētām kolonnām un atlasīt skaitlisko vērtību kolonnas.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
