---
title: Table.First
---

# Table.First


## Description

Retorna la primera fila o un valor per defecte especificat.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Retorna la primera fila de la <code>table</code> o un valor per defecte opcional, <code>default</code>, si la taula és buida.


## Examples

### Example #1 
Cerca la primera fila de la taula.
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
Troba la primera fila de la taula &lt;code&gt;(\{})&lt;/code&gt; o retorna [a = 0, b = 0] si és buida.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
