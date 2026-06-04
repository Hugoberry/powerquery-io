---
title: Table.FindText
---

# Table.FindText


Tiek atgrieztas visas rindas, kas ietver tabulā norādīto tekstu.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Tiek atgrieztas tās tabulas `table` rindas, kas ietver tekstu `text`. Ja teksts netiek atrasts, tiek atgriezta tukša tabula.


## Examples

### Example #1
Atrodiet tās tabulas rindas, kas ietver "Bob".
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
