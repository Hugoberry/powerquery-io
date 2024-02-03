---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Vráti číslo označujúce minimálny počet parametrov požadovaných na vyvolanie typu funkcie.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Vráti číslo označujúce minimálny počet parametrov požadovaných na vyvolanie vstupu <code>type</code> funkcie.


## Examples

### Example #1 
Nájdi počet parametrov požadovaných funkciou &lt;code&gt;(x ako číslo, voliteľne y ako text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
