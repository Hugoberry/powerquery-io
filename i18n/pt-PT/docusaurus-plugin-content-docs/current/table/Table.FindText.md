---
title: Table.FindText
---

# Table.FindText


Devolve todas as linhas que contêm o texto especificado na tabela.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Devolve as linhas na tabela <code>table</code> que contêm o texto <code>text</code>. Se o texto não for encontrado, é devolvida uma tabela vazia.


## Examples

### Example #1 
Determinar as linhas na tabela que contêm &#34;Bob&#34;.
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
