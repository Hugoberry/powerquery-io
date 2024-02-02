---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Retourne un enregistrement avec des valeurs de champ définies sur le nom des paramètres d&#39;un type de fonction, et leurs valeurs définies sur les types correspondants.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Retourne un enregistrement avec des valeurs de champ définies sur le nom des paramètres de <code>type</code>, et leurs valeurs définies sur les types correspondants.


## Examples

### Example #1 
Trouvez les types des paramètres de la fonction &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
