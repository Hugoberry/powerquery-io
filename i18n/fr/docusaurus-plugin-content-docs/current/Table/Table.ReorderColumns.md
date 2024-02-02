---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Retourne une table contenant des colonnes dans l&#39;ordre spécifié.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Retourne une table à partir de l'entrée <code>table</code>, avec les colonnes dans l'ordre spécifié par <code>columnOrder</code>. Les colonnes qui ne sont pas spécifiées dans la liste ne seront pas réorganisées.     Si la colonne n'existe pas, une exception est levée à moins que le paramètre facultatif <code>missingField</code> ne spécifie une autre solution (c'est-à-dire <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Inverse l&#39;ordre des colonnes [Phone] et [Name] dans la table.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Inverse l&#39;ordre des colonnes [Phone] et [Address] de la table, ou utilise &#34; MissingField.Ignore &#34;. Ne change pas la table si la colonne [Address] n&#39;existe pas.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
