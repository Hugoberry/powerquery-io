---
title: Table.FromRows
---

# Table.FromRows


## Description

Crea una taula a partir d&#39;una llista de valors de fila i columnes opcionals


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Crea una taula a partir de la llista <code>rows</code> en què cada element de la llista és una llista interna que conté els valors de columna per a una única fila. Es pot proporcionar a <code>columns</code> una llista opcional de noms de columna, un tipus de taula o un nombre de columnes.


## Examples

### Example #1 
Retorna una taula amb la columna [CustomerID] amb els valors \{1, 2}, la columna [Name] amb els valors \{&#34;Bob&#34;, &#34;Jim&#34;} i la columna [Phone] amb els valors \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Retorna una taula amb la columna [CustomerID] amb els valors \{1, 2}, la columna [Name] amb els valors \{&#34;Bob&#34;, &#34;Jim&#34;} i la columna [Phone] amb els valors \{&#34;123-4567&#34;, &#34;987-6543&#34;}, en la qual [CustomerID] és un tipus de número i [Name] i [Phone] són tipus de text.
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
