---
title: Table.FindText
---

# Table.FindText


## Description

Vraća sve redove iz tabele koji sadrže dati tekst.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Vraća redove iz tabele <code>table</code> koji sadrže tekst <code>text</code>. Ako se tekst ne pronađe, vraća se prazna tabela.


## Examples

### Example #1 
Pronalaženje redova u tabeli koji sadrže „Bane“.
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
