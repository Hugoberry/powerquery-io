---
title: Logical.FromText
---

# Logical.FromText


Cria um valor lógico a partir dos valores de texto "true" e "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Cria um valor lógico a partir do valor de texto `text`, "true" ou "false". Se `text` contiver uma cadeia de caracteres diferente, um erro será gerado. O valor de texto `text` não diferencia maiúsculas de minúsculas.


## Examples

### Example #1
Crie um valor lógico a partir da cadeia de caracteres de texto "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Crie um valor lógico a partir da cadeia de caracteres de texto "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
