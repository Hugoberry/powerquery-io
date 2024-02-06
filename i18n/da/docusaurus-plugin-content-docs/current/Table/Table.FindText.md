---
title: Table.FindText
---

# Table.FindText


Returnerer alle de rækker, der indeholder den angivne tekst i tabellen.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Returnerer de rækker i tabellen <code>table</code>, der indeholder teksten <code>text</code>. Hvis teksten ikke blev fundet, returneres der en tom tabel.


## Examples

### Example #1 
Find de rækker i tabellen, der indeholder &#34;Bob&#34;.
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
