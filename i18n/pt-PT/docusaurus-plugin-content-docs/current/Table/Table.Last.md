---
title: Table.Last
---

# Table.Last


## Description

Devolve a última linha ou um valor predefinido especificado.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Devolve a última linha de <code>table</code> ou um valor predefinido opcional, <code>default</code>, se a tabela estiver vazia.


## Examples

### Example #1 
Localizar a última linha da tabela.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Determinar a última linha da tabela &lt;code&gt;(\{})&lt;/code&gt; ou devolver [a = 0, b = 0] se estiver vazia.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
