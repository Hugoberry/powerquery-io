---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Returnează un număr care indică numărul minim de parametri necesari pentru a invoca tipul de funcție.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Returnează un număr care indică numărul minim de parametri necesari pentru a invoca intrarea <code>type</code> a funcției.


## Examples

### Example #1 
Găsiți numărul de parametri necesari ai funcției &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
