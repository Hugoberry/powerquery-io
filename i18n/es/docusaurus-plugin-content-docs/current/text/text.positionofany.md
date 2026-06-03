---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Devuelve la primera posición en el valor de texto de cualquier carácter enumerado (- 1 si no se encuentra).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Devuelve la primera posición de cualquier carácter de la lista `characters` que se encuentre en `text`. Es posible usar un parámetro opcional `occurrence` para especificar la posición de repetición que se vaya a devolver.


## Examples

### Example #1
Buscar la primera posición de "m" o "h" en el texto "Hola, mundo".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Buscar todas las posiciones de "m" o "h" en el texto "Hola, mundo".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
