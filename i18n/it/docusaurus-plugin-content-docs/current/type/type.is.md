---
title: Type.Is
---

# Type.Is


Determina se un valore del primo tipo è sempre compatibile con il secondo tipo.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determina se un valore di `type1` è sempre compatibile con `type2`. Il parametro `type2` deve essere un valore di tipo primitivo (o primitivo che ammette i valori Null). In caso contrario, il comportamento di questa funzione non è definito e non deve essere utilizzato.


## Examples

### Example #1
Determinare se un valore di tipo number può essere considerato sempre come type any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Determinare se un valore di tipo any può essere considerato sempre come type number.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
