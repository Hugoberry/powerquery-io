---
title: Record.FromList
---

# Record.FromList


## Description

Zwraca rekord, używając listy wartości pól oraz zestawu pól.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Zwraca rekord, używając listy wartości pól <code>list</code> oraz zestawu pól.  Wartością parametru <code>fields</code> może być lista wartości tekstowych lub wartość typu record.  Jeśli pola nie są unikatowe, jest zgłaszany błąd.


## Examples

### Example #1 
Utwórz rekord na podstawie listy wartości pól oraz listy nazw pól.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Utwórz rekord na podstawie listy wartości pól oraz typu rekordu.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
