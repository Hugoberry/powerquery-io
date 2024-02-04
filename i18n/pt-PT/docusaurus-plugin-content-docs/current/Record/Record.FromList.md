---
title: Record.FromList
---

# Record.FromList


## Description

Devolve um registo com base numa lista de valores de campos e num conjunto de campos especificados.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Devolve um registo com base num <code>list</code> de valores de campos e num conjunto de campos especificados.  O <code>fields</code> pode ser especificado por uma lista de valores de texto ou por um tipo de registo.  E emitido um erro se os campos não forem exclusivos.


## Examples

### Example #1 
Criar um registo a partir de uma lista de valores de campos e uma lista de nomes de campos.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Criar um registo a partir de uma lista de valores de campos e um tipo de registo.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
