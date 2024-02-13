---
title: Table.First
---

# Table.First


Devuelve la primera fila o un valor predeterminado especificado.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Devuelve la primera fila de <code>table</code> o un valor predeterminado opcional, <code>default</code>, si la tabla está vacía.


## Examples

### Example #1 
Buscar la primera fila de la tabla.
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
Buscar la primera fila de la tabla &lt;code&gt;(\{})&lt;/code&gt; o devolver [a = 0, b = 0] si está vacía.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
