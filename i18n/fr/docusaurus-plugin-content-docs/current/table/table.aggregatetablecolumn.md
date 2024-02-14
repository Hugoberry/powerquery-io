---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Regroupe une colonne de tables en plusieurs colonnes dans la table conteneur.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Regroupe les tables dans <code>table</code>[<code>column</code>] en plusieurs colonnes contenant les valeurs agrégées des tables. <code>aggregations</code> est utilisé pour spécifier les colonnes contenant les tables à agréger, les fonctions d'agrégation à appliquer aux tables pour générer leurs valeurs, et les noms des colonnes agrégées à créer.


## Examples

### Example #1 
Regroupe les colonnes des tables dans &lt;code&gt;[t]&lt;/code&gt; dans la table &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; en la somme de &lt;code&gt;[t.a]&lt;/code&gt;, le minimum et le maximum de &lt;code&gt;[t.b]&lt;/code&gt;, et le nombre de valeurs dans &lt;code&gt;[t.a]&lt;/code&gt;.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
