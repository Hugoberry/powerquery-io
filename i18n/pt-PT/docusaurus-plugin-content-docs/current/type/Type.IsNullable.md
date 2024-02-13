---
title: Type.IsNullable
---

# Type.IsNullable


Devolve verdadeiro se um tipo é um tipo nulo; caso contrário, falso.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Devolve <code>true</code> se um tipo for do tipo <code>nulllable</code>; caso contrário, <code>false</code>.


## Examples

### Example #1 
Determinar se &lt;code&gt;number&lt;/code&gt; é nulo.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determinar se &lt;code&gt;type nullable number&lt;/code&gt; é nulo.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
