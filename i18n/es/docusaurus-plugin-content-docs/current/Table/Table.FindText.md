---
title: Table.FindText
---

# Table.FindText


Devuelve todas las filas que contienen el texto indicado en la tabla.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Devuelve las filas de la tabla <code>table</code> que contienen el texto <code>text</code>. Si no se encuentra el texto, se devuelve una tabla vacía.


## Examples

### Example #1 
Buscar filas de la tabla que contienen &#34;Pedro&#34;.
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
