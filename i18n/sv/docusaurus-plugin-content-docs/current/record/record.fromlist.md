---
title: Record.FromList
---

# Record.FromList


Returnerar en post baserat på listan med fältvärden och en uppsättning fält.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Returnerar en post baserat på `list` med fältvärden och en uppsättning fält. `fields` kan anges antingen med en lista med textvärden eller med en posttyp. Ett undantag genereras om fälten inte är unika.


## Examples

### Example #1
Skapa en post från en lista med fältvärden och en lista med fältnamn.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Skapa en post från en lista med fältvärden och en posttyp.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
