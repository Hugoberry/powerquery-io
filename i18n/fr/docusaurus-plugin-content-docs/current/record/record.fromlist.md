---
title: Record.FromList
---

# Record.FromList


Retourne un enregistrement en fonction d'une liste de valeurs de champ et d'un ensemble de champs.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Retourne un enregistrement en fonction d'un `list` de valeurs de champ et d'un ensemble de champs. `fields` peut être spécifié par une liste de valeurs de texte, ou un type d'enregistrement. Désolé, une erreur est levée si les champs ne sont pas uniques.


## Examples

### Example #1
Créez un enregistrement à partir d'une liste de valeurs de champ et d'une liste de noms de champ.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Créez un enregistrement à partir d'une liste de valeurs de champ et d'un type d'enregistrement.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
