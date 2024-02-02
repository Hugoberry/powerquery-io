---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Crée une table à partir d&#39;une liste de colonnes et de valeurs spécifiées.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Crée une table de type <code>columns</code> depuis une liste <code>lists</code> contenant des listes imbriquées avec les noms des colonnes et les valeurs.    Si certaines colonnes ont plus de valeurs que d'autres, les valeurs manquantes sont renseignées avec la valeur par défaut, 'null', si les colonnes sont nullables.


## Examples

### Example #1 
Retourne une table à partir d&#39;une liste de noms de clients (customer) d&#39;une liste. Chaque valeur de l&#39;élément de la liste de clients devient une valeur de ligne, et chaque liste devient une colonne.
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
Crée une table à partir d&#39;une liste spécifiée de colonnes et une liste de noms de colonnes.
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
Crée une table avec un nombre de colonnes différent selon les lignes. La valeur manquante d&#39;une ligne est null.
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
