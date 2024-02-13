---
title: Record.FromList
---

# Record.FromList


Retorna um registro de acordo com uma lista de valores de campos e um conjunto de campos.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Retorna um registro de acordo com <code>list</code> de valores de campos e um conjunto de campos.  É possível especificar <code>fields</code> por uma lista de valores de texto ou por um tipo de registro.  Um erro será lançado se os campos não forem exclusivos.


## Examples

### Example #1 
Crie um registro com base em uma lista de valores de campos e uma lista de nomes de campos.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Crie um registro com base em uma lista de valores de campos e um tipo de registro.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
