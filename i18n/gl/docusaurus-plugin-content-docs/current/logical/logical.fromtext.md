---
title: Logical.FromText
---

# Logical.FromText


Crea un valor lóxico a partir dos valores de texto "verdadeiro" e "falso".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Crea un valor lóxico a partir dos valores de texto `text`, ou "verdadeiro" ou "falso". Se `text` contén outra cadea, xérase un erro. O valor de texto `text` non diferencia maiúsculas de minúsculas.


## Examples

### Example #1
Crea un valor lóxico a partir da cadea de texto "verdadeiro".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Crear un valor lóxico a partir da cadea de texto "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
