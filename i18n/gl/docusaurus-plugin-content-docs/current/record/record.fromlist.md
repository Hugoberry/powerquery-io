---
title: Record.FromList
---

# Record.FromList


Devolve un rexistro indicada unha lista de valores de campo e un conxunto de campos.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Devolve un rexistro indicada unha `list` de valores de campo e un conxunto de campos. `fields` pode especificarse cunha lista de valores de texto ou un tipo de rexistro. Se os campos non son únicos, xérase un erro.


## Examples

### Example #1
Xera un rexistro dunha lista de valores de campo e unha lista de nomes de campo.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Xera un rexistro dunha lista de valores de campo e un tipo de rexistro.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
