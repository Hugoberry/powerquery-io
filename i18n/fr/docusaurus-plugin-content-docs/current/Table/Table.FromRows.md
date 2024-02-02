---
title: Table.FromRows
---

# Table.FromRows


## Description

Crée une table à partir d&#39;une liste de valeurs de ligne et de colonnes facultatives


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Crée une table à partir de la liste <code>rows</code>, où chaque élément de la liste est une liste interne qui contient les valeurs des colonnes pour une seule ligne. Une liste facultative de noms de colonnes, un type de table ou un nombre de colonnes peut être fourni pour <code>columns</code>.


## Examples

### Example #1 
Retourne une table avec la colonne [CustomerID] avec les valeurs \{1, 2}, la colonne [Name] avec les valeurs \{&#34;Bob&#34;, &#34;Jim&#34;} et la colonne [Phone] avec les valeurs \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Retourne une table avec la colonne [CustomerID] avec les valeurs \{1, 2}, la colonne [Name] avec les valeurs \{&#34;Bob&#34;, &#34;Jim&#34;} et la colonne [Phone] avec les valeurs \{&#34;123-4567&#34;, &#34;987-6543&#34;}, où [CustomerID] a le type nombre, et où [Name] et [Phone] ont le type texte.
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
