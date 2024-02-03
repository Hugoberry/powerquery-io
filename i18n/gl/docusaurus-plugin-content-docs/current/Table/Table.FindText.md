---
title: Table.FindText
---

# Table.FindText


## Description

Devolve todas as filas que conteñen o texto indicado na táboa.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Devolve todas as filas da táboa <code>table</code> que conteñen o texto <code>text</code>. Se o texto non se localiza, devólvese unha táboa baleira.


## Examples

### Example #1 
Buscar as filas da táboa que conteñen &#34;Bob&#34;.
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
