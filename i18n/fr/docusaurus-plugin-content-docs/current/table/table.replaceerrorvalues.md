---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Remplace les valeurs d&#39;erreur dans les colonnes indiquées par la valeur spécifiée correspondante.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Remplace les valeurs d'erreur dans les colonnes indiquées de <code>table</code> par les nouvelles valeurs de la liste <code>errorReplacement</code>. Le format de la liste est \{\{column1, value1}, …}. Une seule valeur de remplacement peut exister par colonne. Si vous indiquez plusieurs fois la colonne, une erreur peut se produire.


## Examples

### Example #1 
Remplace la valeur de l&#39;erreur par le texte &#34; world &#34; dans la table.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
Remplace dans la table la valeur de l&#39;erreur de la colonne A par le texte &#34; hello &#34; et dans la colonne B par le texte &#34; world &#34;.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
