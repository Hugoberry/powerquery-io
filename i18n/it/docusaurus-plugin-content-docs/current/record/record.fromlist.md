---
title: Record.FromList
---

# Record.FromList


Restituisce un record corrispondente a un elenco di valori di campi e un set di campi.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Restituisce un record corrispondente a un elemento <code>list</code> di valori di campi e un set di campi.  <code>fields</code> può essere specificato da un elenco di valori di testo o da un tipo di record.  Se i campi non sono univoci viene restituito un errore.


## Examples

### Example #1 
Compilare un record da un elenco di valori di campi e un elenco di nomi di campi.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Compilare un record da un elenco di valori di campi e un tipo di record.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
