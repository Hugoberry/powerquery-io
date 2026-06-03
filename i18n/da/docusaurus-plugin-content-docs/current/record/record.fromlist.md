---
title: Record.FromList
---

# Record.FromList


Returnerer en post med en liste over feltværdier og et sæt felter.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Returnerer en post med en `list` over feltværdier og et sæt felter. `fields` kan enten angives ved en liste med tekstværdier eller en posttype. Der udløses en fejl, hvis felterne ikke er entydige.


## Examples

### Example #1
Opret en post ud fra en liste over feltværdier og en liste over feltnavne.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Opret en post ud fra en liste over feltværdier og en posttype.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
