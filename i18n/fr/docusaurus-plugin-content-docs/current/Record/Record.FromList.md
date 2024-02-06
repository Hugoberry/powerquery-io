---
title: Record.FromList
---

# Record.FromList


Retourne un enregistrement en fonction d&#39;une liste de valeurs de champ et d&#39;un ensemble de champs.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Retourne un enregistrement en fonction d'un <code>list</code> de valeurs de champ et d'un ensemble de champs.  <code>fields</code> peut être spécifié par une liste de valeurs de texte, ou un type d'enregistrement.  Une erreur est générée si les champs ne sont pas uniques.


## Examples

### Example #1 
Créez un enregistrement à partir d&#39;une liste de valeurs de champ et d&#39;une liste de noms de champ.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Créez un enregistrement à partir d&#39;une liste de valeurs de champ et d&#39;un type d&#39;enregistrement.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
