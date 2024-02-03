---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Crea una taula a partir d&#39;una llista de columnes i valors especificats.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Crea una taula del tipus <code>columns</code> a partir d'una llista <code>lists</code> que conté llistes imbricades amb els noms i valors de columna.    Si algunes columnes tenen més valors que altres, els valors que hi faltin s'emplenaran amb el valor per defecte, "null", si les columnes són anul·lables.


## Examples

### Example #1 
Retorna una taula a partir d&#39;una llista de noms del client en una llista. Cada valor de l&#39;element de la llista del client es converteix en un valor de fila i cada llista es converteix en una columna.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Crea una taula a partir d&#39;una llista donada de columnes i una llista de noms de columna.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Crea una taula amb un nombre diferent de columnes per fila. El valor que falta de la fila és nul.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
