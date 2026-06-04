---
title: Binary.View
---

# Binary.View


Crea ou amplía un binario con controladores definidos polo usuario para operacións de consulta e acción.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Devolve unha vista de `binary` na que as funcións especificadas en `handlers` se usan en lugar do comportamento predefinido dunha operación cando esta se aplica á vista.

Se se fornece `binary`, todas as demais funcións do controlador son opcionais. Se `binary` non se fornece, precísase as función do controlador `GetStream`. Se non se especifica unha función de controlador para unha operación, aplicarase o comportamento predefinido da operación a `binary` no seu lugar (excepto no caso de `GetExpression`).

As funcións do controlador deben devolver un valor equivalente semanticamente ao resultado de aplicar a operación en `binary` (ou a vista resultante no caso de `GetExpression`).

Se unha función de controlador provoca un erro, o comportamento predefinido da operación aplícase á vista.

`Binary.View` pode usarse para implantar o pregamento a unha orixe de datos: a tradución de consultas M en operacións específicas da fonte (por exemplo, para descargar unha sección dun ficheiro).

Consulta a documentación publicada para obter unha descrición máis completa de `Binary.View`.


## Examples

### Example #1
Crea unha visualización básica que non requira acceder aos datos para determinar a lonxitude.
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
