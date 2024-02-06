---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Retourne un type retourné par un type de fonction.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Retourne un type retourné par une fonction <code>type</code>.


## Examples

### Example #1 
Trouvez le type de retour de &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
