---
title: Table.FromRows
---

# Table.FromRows


## Description

Crea unha táboa a partir dunha lista de valores de fila e columnas opcionais


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Crea unha táboa a partir da lista <code>rows</code> onde cada elemento da lista é unha lista interna que contén os valores de columnas para unha fila única. Pódese fornecer unha lista opcional de nomes de columnas, un tipo de táboa ou un número de columnas para <code>columns</code>.


## Examples

### Example #1 
Devolver unha táboa coa columna [CustomerID] cos valores \{1, 2} e a columna [Name] cos valores \{&#34;Bob&#34;, &#34;Jim&#34;} e a columna [Phone] cos valores \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Devolver unha táboa coa columna [CustomerID] cos valores \{1, 2} e a columna [Name] cos valores \{&#34;Bob&#34;, &#34;Jim&#34;} e a columna [Phone] cos valores \{&#34;123-4567&#34;, &#34;987-6543&#34;}, indo [CustomerID] é un tipo de número e [Name] e [Phone] son tipos de texto.
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
