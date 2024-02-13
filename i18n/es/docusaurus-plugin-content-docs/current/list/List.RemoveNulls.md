---
title: List.RemoveNulls
---

# List.RemoveNulls


Quita todos los valores &#34;NULL&#34; de la lista especificada.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Quita todas las coincidencias de valores "NULL" de <code>list</code>. Si no existen valores 'NULL', se devuelve la lista original.


## Examples

### Example #1 
Quitar los valores &#34;null&#34; de la lista \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
