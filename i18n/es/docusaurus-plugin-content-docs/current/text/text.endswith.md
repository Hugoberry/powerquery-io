---
title: Text.EndsWith
---

# Text.EndsWith


Indica si el texto termina en el valor especificado.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indica si el texto especificado, `text`, termina con el valor especificado, `substring`. La indicación distingue mayúsculas de minúsculas.

`comparer` es un elemento `Comparer` que se usa para controlar la comparación. Los comparadores se pueden usar para proporcionar comparaciones compatibles con la referencia cultural y la configuración regional, o bien que no distingan mayúsculas de minúsculas.

Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:

-   `Comparer.Ordinal`: se usa para realizar una comparación ordinal exacta
-   `Comparer.OrdinalIgnoreCase`: se usa para realizar una comparación ordinal exacta que no distinga mayúsculas de minúsculas
-   `Comparer.FromCulture`: se usa para realizar una comparación que tiene en cuenta la referencia cultural


## Examples

### Example #1
Comprobar si "Hola, mundo" termina con "mundo".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Comprobar si "Hola, mundo" termina con "Mundo".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
