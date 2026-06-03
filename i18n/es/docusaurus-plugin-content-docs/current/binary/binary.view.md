---
title: Binary.View
---

# Binary.View


Crea o amplía un binario con controladores definidos por el usuario para operaciones de consulta y acción.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Devuelve una vista de `binary` dónde se usan las funciones especificadas en `handlers` en lugar del comportamiento predeterminado de una operación cuando la operación se aplica a la vista.

Si `binary` se proporciona, todas las funciones del controlador son opcionales. Si `binary` no se proporciona, se requiere la función de controlador `GetStream`. Si no se especifica una función de controlador para una operación, en su lugar se aplica el comportamiento predeterminado de la operación a `binary` (excepto en el caso de `GetExpression`).

Las funciones de controlador deben devolver un valor que es semánticamente equivalente al resultado de aplicar la operación contra `binary` (o la vista resultante en el caso de `GetExpression`).

Si una función de controlador genera un error, el comportamiento predeterminado de la operación se aplica a la vista.

`Binary.View` se puede usar para implementar el plegado a una fuente de datos: la traducción de consultas M en operaciones específicas de la fuente (por ejemplo, para descargar una sección de un archivo).

Consulte la documentación publicada del conector personalizado de Power Query para obtener una descripción más completa de `Binary.View`.


## Examples

### Example #1
Cree una vista básica que no requiera tener acceso a los datos para determinar la longitud.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
