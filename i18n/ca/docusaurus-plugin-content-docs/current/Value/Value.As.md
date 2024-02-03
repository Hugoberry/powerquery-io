---
title: Value.As
---

# Value.As


## Description

Retorna el valor si és compatible amb el tipus especificat.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Retorna el valor si és compatible amb el tipus especificat. És equivalent a l'operador "as" de M, amb l'excepció que pot acceptar referències de tipus d'identificador, com ara Number.Type.


## Examples

### Example #1 
Converteix un nombre en un nombre.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Intent de conversió d&#39;un valor de text a un nombre.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
