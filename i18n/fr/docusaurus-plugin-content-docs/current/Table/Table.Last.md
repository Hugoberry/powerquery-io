---
title: Table.Last
---

# Table.Last


## Description

Retourne la dernière ligne ou une valeur par défaut spécifiée.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Retourne la dernière ligne de <code>table</code> ou une valeur par défaut facultative <code>default</code>, si la table est vide.


## Examples

### Example #1 
Recherche la dernière ligne de la table.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Recherche la dernière ligne de la table &lt;code&gt;(\{})&lt;/code&gt; ou retourne [a = 0, b = 0] si elle est vide.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
