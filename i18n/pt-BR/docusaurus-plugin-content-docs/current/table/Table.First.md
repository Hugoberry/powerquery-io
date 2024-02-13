---
title: Table.First
---

# Table.First


Retorna a primeira linha ou um valor padrão especificado.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Retorna a primeira linha da <code>table</code> ou um valor padrão <code>default</code> opcional, se a tabela estiver vazia.


## Examples

### Example #1 
Localizar a primeira linha da tabela.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Localize a primeira linha da tabela &lt;code&gt;(\{})&lt;/code&gt; ou retorne [a = 0, b = 0] se ela estiver vazia.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
