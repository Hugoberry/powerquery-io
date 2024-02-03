---
title: Record.FromList
---

# Record.FromList


## Description

Devuelve un registro dada una lista de valores de campo y un conjunto de campos.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Devuelve un registro dado una <code>list</code> de valores de campo y un conjunto de campos.  El <code>fields</code> puede especificarse mediante una lista de valores de texto o un tipo de registro.  Se arroja un error si los campos no son únicos.


## Examples

### Example #1 
Crear un registro de una lista de valores de campo y una lista de nombres de campo.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Crear un registro de una lista de valores de campo y un tipo de registro.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
