---
title: Table.AlternateRows
---

# Table.AlternateRows


Conserve le décalage initial puis accepte et ignore de façon alternée les lignes suivantes.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Conserve le décalage initial puis accepte et ignore de façon alternée les lignes suivantes.    <ul>       <li><code>table</code> : table d'entrée.</li>       <li><code>offset</code> : nombre de lignes à conserver avant de démarrer les itérations.</li>       <li><code>skip</code> : nombre de lignes à supprimer dans chaque itération.</li>       <li><code>take</code> : nombre de lignes à conserver dans chaque itération.</li>    </ul>    


## Examples

### Example #1 
Crée une table à partir de la table qui, en commençant par la première ligne, ignore 1 valeur, puis conserve 1 valeur.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
