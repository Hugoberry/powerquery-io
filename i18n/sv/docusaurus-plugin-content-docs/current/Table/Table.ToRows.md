---
title: Table.ToRows
---

# Table.ToRows


Skapar en lista med kapslade med radvärden från en tabell.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Remarks

Skapar en lista med kapslade listor från tabellen, <code>table</code>. Varje listpost är en inre lista som innehåller radvärdena.


## Examples

### Example #1 
Skapa en lista med radvärdena från tabellen.
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
