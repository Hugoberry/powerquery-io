---
title: Table.FromRows
---

# Table.FromRows


## Description

Cria uma tabela a partir de uma lista de valores de linha e colunas opcionais


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Cria uma tabela a partir da lista <code>rows</code>, em que cada elemento da lista é uma lista interna que contém os valores de coluna de uma linha. É possível fornecer uma lista opcional de nomes de coluna, um tipo de tabela ou um número de colunas para <code>columns</code>.


## Examples

### Example #1 
Devolver uma tabela com a coluna [CustomerID] com os valores \{1, 2} e a coluna [Name] com os valores \{&#34;Bob&#34;, &#34;Jim&#34;} e a coluna [Telefone] com os valores \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Devolve uma tabela com a coluna [CustomerID] com valores \{1, 2}, coluna [Nome] com os valores \{&#34;Bob&#34;, &#34;Jim&#34;}, e a coluna [Telefone] com os valores \{&#34;123-4567&#34;, &#34;987-6543&#34;}, em que [CustomerID] é do tipo número e [Nome] e [Telefone] são do tipo texto.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
