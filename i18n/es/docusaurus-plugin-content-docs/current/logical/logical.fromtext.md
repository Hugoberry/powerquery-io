---
title: Logical.FromText
---

# Logical.FromText


Crea un valor lógico a partir de los valores de texto "true" y "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Crea un valor lógico a partir de los valores de texto `text`, ya sean "true" o "false". Si `text` contiene una cadena diferente, se produce un error. El valor de texto `text` no distingue entre mayúsculas y minúsculas.


## Examples

### Example #1
Crear un valor lógico a partir de la cadena de texto "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Crear un valor lógico a partir de la cadena de texto "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
