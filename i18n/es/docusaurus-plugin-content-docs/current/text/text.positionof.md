---
title: Text.PositionOf
---

# Text.PositionOf


Devuelve la primera posición del valor (- 1 si no se encuentra).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Devuelve la posición de la repetición especificada del valor text `substring` encontrado en `text`. Se puede usar un parámetro opcional `occurrence` para especificar la posición de repetición que se devolverá (de forma predeterminada, la primera repetición). Devuelve el valor -1 si no se encuentra `substring`.

`comparer` es un elemento `Comparer` que se usa para controlar la comparación. Los comparadores se pueden usar para proporcionar comparaciones compatibles con la referencia cultural y la configuración regional, o bien que no distingan mayúsculas de minúsculas.

Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:

-   `Comparer.Ordinal`: se usa para realizar una comparación ordinal exacta
-   `Comparer.OrdinalIgnoreCase`: se usa para realizar una comparación ordinal exacta que no distinga mayúsculas de minúsculas
-   `Comparer.FromCulture`: se usa para realizar una comparación que tiene en cuenta la referencia cultural


## Examples

### Example #1
Obtener la posición de la primera coincidencia de "mundo" en el texto "Hola mundo. Hola mundo".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Obtiene la posición de la última aparición de "World" en "Hello, World! Hola, mundo".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
