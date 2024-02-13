---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transforme les noms de colonnes en utilisant la fonction spécifiée.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transforme les noms de colonnes à l’aide de la fonction <code>nameGenerator</code> donnée. Options valides :     <div>      <code></code> MaxLength spécifie la longueur maximale des nouveaux noms de colonnes. Si la fonction donnée donne un nom de colonne plus long, le nom long est tronqué.    </div>    <div>      <code>Comparer</code> est utilisé pour contrôler la comparaison lors de la génération de nouveaux noms de colonnes. Les comparateurs peuvent être utilisés pour fournir des comparaisons ne respectant pas la casse ou de culture et prenant en charge les paramètres régionaux.    </div>    <div>      Les comparateurs intégrés suivants sont disponibles dans le langage de formule :    </div>    <ul>      <li><code>Comparer.Ordinal</code> : Utilisé pour effectuer une comparaison ordinale</li>      <li><code>Comparer.OrdinalIgnoreCase</code> : utilisé pour effectuer une comparaison exacte ne respectant pas la casse</li>      <li> <code>Comparer.FromCulture</code> : utilisé pour effectuer une comparaison prenant en compte la culture</li>    </ul>    


## Examples

### Example #1 
Supprime le caractère &lt;code&gt;#(tab)&lt;/code&gt; des noms de colonnes
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transformez les noms de colonnes pour générer des noms ne respectant pas la casse et d&#39;une longueur de 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
