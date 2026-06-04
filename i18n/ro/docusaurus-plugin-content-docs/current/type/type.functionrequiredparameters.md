---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Returnează un număr care indică numărul minim de parametri necesari pentru a invoca tipul de funcție.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Returnează un număr care indică numărul minim de parametri necesari pentru a invoca intrarea `type` a funcției.


## Examples

### Example #1
Găsiți numărul de parametri necesari ai funcției `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
