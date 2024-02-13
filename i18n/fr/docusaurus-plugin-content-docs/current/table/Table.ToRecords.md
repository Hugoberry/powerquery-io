---
title: Table.ToRecords
---

# Table.ToRecords


Convertit une table en une liste d&#39;enregistrements.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Remarks

Convertit une table, <code>table</code>, en une liste d'enregistrements.


## Examples

### Example #1 
Convertit la table en une liste d&#39;enregistrements.
```powerquery
Table.ToRecords(
    Table.FromRows(
        {
            {1, "Bob", "123-4567"},
            {2, "Jim", "987-6543"},
            {3, "Paul", "543-7890"}
        },
        {"CustomerID", "Name", "Phone"}
    )
)
```

Result: 
```powerquery
{
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
}
```




## Category
Table.Conversions
