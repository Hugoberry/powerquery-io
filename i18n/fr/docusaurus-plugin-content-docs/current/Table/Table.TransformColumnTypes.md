---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Applique les transformations de type au format \{ column, type } à l&#39;aide d&#39;une culture spécifique.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Retourne une table à partir de l'entrée <code>table</code> en appliquant l'opération de transformation aux colonnes spécifiées dans le paramètre <code>typeTransformations</code> (avec le format \{ column name, type name}), en utilisant la culture spécifiée dans le paramètre facultatif <code>culture</code> (par exemple, "fr-fr").    Si la colonne n'existe pas, une exception est levée.


## Examples

### Example #1 
Transforme les valeurs de nombre dans la colonne [a] en valeurs de texte depuis la table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
