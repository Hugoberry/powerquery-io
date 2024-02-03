---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Indica si la tabla contiene alguna fila.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Indica si la <code>table</code> contiene alguna fila. Devuelve <code>true</code> si no hay filas (es decir, si la tabla está vacía), <code>false</code> en caso contrario.


## Examples

### Example #1 
Determinar si la tabla está vacía.
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
Determinar si la tabla &lt;code&gt;(\{})&lt;/code&gt; está vacía.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
