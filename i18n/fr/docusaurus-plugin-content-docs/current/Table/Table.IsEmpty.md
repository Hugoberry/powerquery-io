---
title: Table.IsEmpty
---

# Table.IsEmpty


Indique si la table contient des lignes.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Indique si <code>table</code> contient des lignes. Retourne <code>true</code> s'il n'y a pas de lignes (c'est-à-dire si la table est vide), sinon <code>false</code>.


## Examples

### Example #1 
Détermine si la table est vide.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Détermine si la table &lt;code&gt;(\{})&lt;/code&gt; est vide.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
