---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Retourne un nombre indiquant le nombre minimum de paramètres requis pour appeler le type de fonction.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Retourne un nombre indiquant le nombre minimum de paramètres requis pour appeler le <code>type</code> d'entrée de la fonction.


## Examples

### Example #1 
Trouvez le nombre de paramètres requis de la fonction &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
