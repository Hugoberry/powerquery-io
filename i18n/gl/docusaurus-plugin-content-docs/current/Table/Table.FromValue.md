---
title: Table.FromValue
---

# Table.FromValue


## Description

Crea unha táboa cunha columna do(s) valor(es) fornecido(s).


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Crea unha táboa cunha columna que contén a lista de valores ou o valor fornecido, <code>value</code>. Pode especificarse un parámetro de rexistro opcional, <code>options</code>, para controlar as opcións seguintes:    <ul>    <li> <code>DefaultColumnName</code>: o nome de columna que se usa ao construír a táboa a partir dunha lista ou valor escalar.</li>    </ul>  


## Examples

### Example #1 
Crear unha táboa a partir do valor 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Crear unha táboa a partir da lista.
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
Crear unha táboa a partir do valor 1, cun nome de columna personalizado.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
