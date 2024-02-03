---
title: Record.FromList
---

# Record.FromList


## Description

Retorna un registre donada una llista de valors del camp i un conjunt de camps.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Retorna un registre donada una <code>list</code> de valors del camp i un conjunt de camps.  Es pot especificar la <code>fields</code> amb una llista de valors de text o un tipus de registre.  Es produeix un error si els camps no són únics.


## Examples

### Example #1 
Genera un registre a partir d&#39;una llista de valors del camp i una llista de noms de camp.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Genera un registre a partir d&#39;una llista de valors de camp i un tipus de registre.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
