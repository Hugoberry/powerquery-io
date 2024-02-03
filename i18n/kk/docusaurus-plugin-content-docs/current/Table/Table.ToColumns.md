---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Кестеден баған мәндерінің енгізілген тізімдерінің тізімін жасайды.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

<code>table</code> кестесінен енгізілген тізімдердің тізімін жасайды.  Әр тізім элементі баған мәндерін қамтитын ішкі тізім болып табылады.


## Examples

### Example #1 
Кестеден баған мәндерінің тізімін жасау.
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
