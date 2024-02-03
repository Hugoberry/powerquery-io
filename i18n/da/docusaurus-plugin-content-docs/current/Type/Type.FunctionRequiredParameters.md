---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Returnerer et tal, der angiver minimumantallet af parametre, der kræves for at aktivere typen af funktion.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Returnerer et tal, der angiver minimumantallet af parametre, der kræves for at aktivere inputtet <code>type</code> for funktionen.


## Examples

### Example #1 
Find antallet af nødvendige parametre for funktionen &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
