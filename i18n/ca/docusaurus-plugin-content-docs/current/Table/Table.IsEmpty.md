---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Indica si la taula conté files.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Indica si l'element <code>table</code> conté files. Retorna <code>true</code> si no hi ha cap fila (és a dir, si la taula està buida) i <code>false</code> en cas contrari.


## Examples

### Example #1 
Determina si la taula està buida.
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
Determina si la taula &lt;code&gt;(\{})&lt;/code&gt; és buida.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
