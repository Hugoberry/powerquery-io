---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Devuelve el elemento uno de la lista para una lista de longitud uno y el valor predeterminado para una lista vacía.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Si solo hay un elemento en la lista <code>list</code>, devuelve dicho elemento.    Si la lista está vacía, la función devuelve "null", excepto si se especifica un <code>default</code> opcional. Si hay más de un elemento en la lista, la función devuelve un error.


## Examples

### Example #1 
Buscar el único valor de la lista \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Buscar el único valor de la lista \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Buscar el único valor de la lista \{}. Si está vacío, se devuelve -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
