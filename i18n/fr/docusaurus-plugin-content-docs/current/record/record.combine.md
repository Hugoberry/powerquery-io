---
title: Record.Combine
---

# Record.Combine


Combine les enregistrements dans la liste spécifiée.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Combine les enregistrements dans le <code>records</code> spécifié. Si <code>records</code> contient des valeurs autres qu'un enregistrement, une erreur est retournée.


## Examples

### Example #1 
Crée un enregistrement combiné à partir des enregistrements.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
