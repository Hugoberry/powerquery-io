---
title: Table.ToRecords
---

# Table.ToRecords


Converteix una taula en una llista de registres.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Remarks

Converteix una taula, `table`, en una llista de registres.


## Examples

### Example #1
Converteix la taula en una llista de registres.
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
