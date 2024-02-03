---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Кестеде тізімдер бағаны берілген болса, оның әр мән үшін жолдың көшірмесін тізімінде жасау.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

<code>table</code> берілген болса, мұндағы <code>column</code> — мәндердің тізімі, жолды әр мән үшін тізімге бөледі. Басқа бағандардағы мәндер жасалған әр жаңа жолда қайталанады.


## Examples

### Example #1 
Кестедегі [Name] тізім бағанын бөлу.
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
