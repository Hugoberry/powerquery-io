---
title: Record.Combine
---

# Record.Combine


## Description

Combina los registros en la lista dada.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Combina los registros en la <code>records</code> dada. Si <code>records</code> contiene valores que no sean registros, se devuelve un error.


## Examples

### Example #1 
Crea un registro combinado a partir de los registros.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
