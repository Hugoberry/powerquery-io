---
title: Table.FindText
---

# Table.FindText


## Description

Retourne toutes les lignes qui contiennent le texte spécifié dans la table.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Retourne les lignes dans la table <code>table</code> qui contiennent le texte <code>text</code>. Si le texte est introuvable, une table vide est retournée.


## Examples

### Example #1 
Recherche les lignes dans la table qui contiennent &#34; Bob &#34;.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations