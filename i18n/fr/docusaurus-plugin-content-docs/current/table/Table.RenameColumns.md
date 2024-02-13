---
title: Table.RenameColumns
---

# Table.RenameColumns


Applique les attributions de noms sous la forme \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Effectue les attributions de noms spécifiées sur les colonnes dans la table <code>table</code>. Une opération de remplacement <code>renames</code> comprend une liste de deux valeurs, l'ancien nom de colonne et le nouveau nom de colonne, fournies dans une liste.    Si la colonne n'existe pas, une exception est levée à moins que le paramètre facultatif <code>missingField</code> ne spécifie une alternative (c'est-à-dire <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Remplace le nom de la colonne &#34; CustomerNum &#34; de la table par &#34; CustomerID &#34;.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Remplace les noms de colonne de la table &#34; CustomerNum &#34; par &#34; CustomerID &#34; et &#34; PhoneNum &#34; par &#34; Phone &#34;.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
Remplace le nom de colonne de la table &#34; NewCol &#34; par &#34; NewColumn &#34;, et ignore cette requête si la colonne n&#39;existe pas.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
