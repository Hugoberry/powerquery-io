---
title: Table.ToRows
---

# Table.ToRows


## Description

Кестеден жол мәндерінің енгізілген тізімдерінің тізімін жасайды.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

<code>table</code> кестесінен енгізілген тізімдердің тізімін жасайды.  Әр тізім элементі жол мәндерін қамтитын ішкі тізім болып табылады.


## Examples

### Example #1 
Кестеден жол мәндерінің тізімін жасау.
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
