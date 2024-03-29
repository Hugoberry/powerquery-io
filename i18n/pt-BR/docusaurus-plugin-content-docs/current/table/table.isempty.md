---
title: Table.IsEmpty
---

# Table.IsEmpty


Indica se a tabela contém linhas.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Indica se a tabela <code>table</code> contém linhas. Retorna <code>true</code> se as linhas forem distintas; caso contrário, <code>false</code>.


## Examples

### Example #1 
Determinar se a tabela está vazia.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Determine se a tabela &lt;code&gt;(\{})&lt;/code&gt; está vazia.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
