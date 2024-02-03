---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

S daným stĺpcom zoznamov v tabuľke vytvorte kópiu riadka pre každú hodnotu v príslušnom zozname.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

S daným stĺpcom <code>table</code>, kde <code>column</code> je zoznam hodnôt, sa zoznam rozdelí do riadka pre každú hodnotu. Hodnoty v ostatných stĺpcoch sa duplikujú v každom novom vytvorenom riadku.


## Examples

### Example #1 
Rozdeľte stĺpec zoznamu [Name] v tabuľke.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
