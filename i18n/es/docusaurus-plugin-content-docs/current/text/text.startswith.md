---
title: Text.StartsWith
---

# Text.StartsWith


Indica si el texto empieza con un valor especificado.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Devuelve true si el valor de texto `text` comienza con el valor de texto `substring`.

-   `text`: un valor `text` que se va a buscar.
-   `substring`: un valor `text` que es la substring que se va a buscar en `text`.
-   `comparer`: *(Opcional)* A `Comparer` usa para controlar la comparación. Por ejemplo, `Comparer.OrdinalIgnoreCase` se puede usar para realizar búsquedas que no distinguen mayúsculas de minúsculas.

`comparer` es un `Comparer` que se usa para controlar la comparación. Los comparadores se pueden usar para proporcionar comparaciones que no distinguen mayúsculas de minúsculas o referencias culturales y que reconocen la configuración regional.

Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:

-   `Comparer.Ordinal`: se usa para realizar una comparación ordinal exacta.
-   `Comparer.OrdinalIgnoreCase`: se usa para realizar una comparación exacta que no distingue mayúsculas de minúsculas.
-   `Comparer.FromCulture`: se usa para realizar una comparación compatible con la referencia cultural.


## Examples

### Example #1
Comprobar si el texto "Hola mundo" empieza con el texto "hola".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Comprobar si el texto "Hola mundo" empieza con el texto "Hola".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Sin distinguir mayúsculas y minúsculas, comprueba si el texto "Hola mundo" empieza con el texto "hola".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
