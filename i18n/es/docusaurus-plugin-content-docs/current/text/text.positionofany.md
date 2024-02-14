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

Devuelve la primera posición de cualquier carácter de la lista <code>characters</code> que se encuentre en <code>text</code>.    Es posible usar un parámetro opcional <code>occurrence</code> para especificar la posición de repetición que se vaya a devolver.


## Examples

### Example #1 
Buscar la primera posición de &#34;m&#34; o &#34;h&#34; en el texto &#34;Hola, mundo&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Buscar todas las posiciones de &#34;m&#34; o &#34;h&#34; en el texto &#34;Hola, mundo&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
