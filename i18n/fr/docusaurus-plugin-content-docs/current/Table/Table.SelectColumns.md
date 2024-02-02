---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Retourne une table contenant uniquement les colonnes spécifiées.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Retourne le <code>table</code> avec uniquement le <code>columns</code>.    <ul>       <li><code>table</code> spécifié : table.</li>       <li><code>columns</code> fournie : liste des colonnes de la table <code>table</code> à retourner. Les colonnes de la table retournée sont dans l’ordre répertorié dans <code>columns</code>.</li>       <li><code>missingField</code> : <i>(Facultatif) </i> Que faire si la colonne n’existe pas.  Exemple : <code>missingField.UseNull</code> ou <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Incluez uniquement la colonne [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
Incluez uniquement les colonnes [CustomerID] et [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
Si la colonne incluse n&#39;existe pas, le résultat par défaut est une erreur.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
Si la colonne incluse n&#39;existe pas, l&#39;option &lt;code&gt;MissingField.UseNull&lt;/code&gt; crée une colonne de valeurs nulles.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
