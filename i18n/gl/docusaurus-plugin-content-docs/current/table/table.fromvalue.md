---
title: Table.FromValue
---

# Table.FromValue


Crea unha táboa cunha columna do(s) valor(es) fornecido(s).


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Crea unha táboa cunha columna que contén o valor ou a lista de valores proporcionados, `value` . Pódese especificar un parámetro de rexistro opcional, `options` , para controlar as seguintes opcións:

-   `DefaultColumnName`: O nome da columna empregado ao construír unha táboa a partir dunha lista ou dun valor escalar.


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
