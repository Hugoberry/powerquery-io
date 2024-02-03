---
title: Table.FromValue
---

# Table.FromValue


## Description

Crea una tabla con una columna a partir de los valores suministrados.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Crea una tabla con una columna que contiene el valor o la lista de valores <code>value</code> proporcionados. Se puede especificar una parámetro de registro opcional, <code>options</code>, para controlar las siguientes opciones:    <ul>    <li> <code>DefaultColumnName</code>: el nombre de la columna usada al crear una tabla a partir de una lista o valor escalar.</li>    </ul>  


## Examples

### Example #1 
Crea una tabla a partir del valor 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Crear una tabla a partir de la lista.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Cree una tabla a partir del valor 1, con un nombre de columna personalizado.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
