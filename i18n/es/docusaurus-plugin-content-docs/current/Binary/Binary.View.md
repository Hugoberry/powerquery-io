---
title: Binary.View
---

# Binary.View


## Description

Crea o amplía un binario con controladores definidos por el usuario para operaciones de consulta y acción.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Devuelve una vista de <code>binary</code> dónde se usan las funciones especificadas en <code>handlers</code> en lugar del comportamiento predeterminado de una operación cuando la operación se aplica a la vista.<br /> Si <code>binary</code> se proporciona, todas las funciones del controlador son opcionales. Si <code>binary</code> no se proporciona, se requiere la función de controlador <code>GetStream</code>. Si no se especifica una función de controlador para una operación, en su lugar se aplica el comportamiento predeterminado de la operación a <code>binary</code> (excepto en el caso de <code>GetExpression</code>).<br /> Las funciones de controlador deben devolver un valor que es semánticamente equivalente al resultado de aplicar la operación contra <code>binary</code> (o la vista resultante en el caso de <code>GetExpression</code>).<br /> Si una función de controlador genera un error, el comportamiento predeterminado de la operación se aplica a la vista.<br /><code>Binary.View</code> se puede usar para implementar el plegado a una fuente de datos: la traducción de consultas M en operaciones específicas de la fuente (por ejemplo, para descargar una sección de un archivo).<br />Consulte la documentación publicada del conector personalizado de Power Query para obtener una descripción más completa de <code>Binary.View</code>.<br />


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
