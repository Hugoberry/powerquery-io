---
title: Table.First
---

# Table.First


Retourne la première ligne ou une valeur par défaut spécifiée.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Retourne la première ligne de <code>table</code> ou une valeur par défaut facultative <code>default</code>, si la table est vide.


## Examples

### Example #1 
Recherche la première ligne de la table.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Recherche la première ligne de la table &lt;code&gt;(\{})&lt;/code&gt; ou retourne [a = 0, b = 0] si elle est vide.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
