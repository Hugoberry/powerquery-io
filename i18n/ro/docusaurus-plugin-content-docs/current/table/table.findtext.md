---
title: Table.FindText
---

# Table.FindText


Returnează toate rândurile care conţin textul dat în tabel.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Returnează rândurile din tabelul `table` care conţin textul `text`. Dacă nu se găseşte textul, se returnează un tabel necompletat.


## Examples

### Example #1
Găsiți rândurile din tabel ce conțin „Bob”.
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
