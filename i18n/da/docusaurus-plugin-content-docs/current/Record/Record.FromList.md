---
title: Record.FromList
---

# Record.FromList


## Description

Returnerer en post med en liste over feltværdier og et sæt felter.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Returnerer en post med en <code>list</code> over feltværdier og et sæt felter.  <code>fields</code> kan enten angives ved en liste med tekstværdier eller en posttype.  Der udløses en fejl, hvis feltet ikke er entydigt.


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
