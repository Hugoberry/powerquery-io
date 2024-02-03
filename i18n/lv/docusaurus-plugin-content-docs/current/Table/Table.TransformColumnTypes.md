---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Tiek lietota formāta \{ column, type } tipa pārvēršana, izmantojot konkrētu kultūru.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Tiek atgriezta tabula no ievades <code>table</code>, lietojot pārvēršanas operāciju kolonnās, kas norādītas parametrā <code>typeTransformations</code> (kur formāts ir \{ column name, type name}), izmantojot norādīto kultūru neobligātajā parametrā <code>culture</code> (piemēram, "lv-LV").    Ja kolonna nepastāv, tiek aktivizēts izņēmums.


## Examples

### Example #1 
Pārvērtiet skaitliskās vērtības kolonnā [a] par teksta vērtībām no tabulas &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
