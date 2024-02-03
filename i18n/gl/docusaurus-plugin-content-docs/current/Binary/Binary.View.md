---
title: Binary.View
---

# Binary.View


## Description

Crea ou amplía un binario con controladores definidos polo usuario para operacións de consulta e acción.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Devolve unha vista de <code>binary</code> na que as funcións especificadas en <code>handlers</code> se usan en lugar do comportamento predefinido dunha operación cando esta se aplica á vista.<br />Se se fornece <code>binary</code>, todas as demais funcións do controlador son opcionais. Se <code>binary</code> non se fornece, precísase as función do controlador <code>GetStream</code>. Se non se especifica unha función de controlador para unha operación, aplicarase o comportamento predefinido da operación a <code>binary</code> no seu lugar (excepto no caso de <code>GetExpression</code>).<br />As funcións do controlador deben devolver un valor equivalente semanticamente ao resultado de aplicar a operación en <code>binary</code> (ou a vista resultante no caso de <code>GetExpression</code>).<br />Se unha función de controlador provoca un erro, o comportamento predefinido da operación aplícase á vista.<br /><code>Binary.View</code> pode usarse para implantar o pregamento a unha orixe de datos: a tradución de consultas M en operacións específicas da fonte (por exemplo, para descargar unha sección dun ficheiro).<br />Consulta a documentación publicada para obter unha descrición máis completa de <code>Binary.View</code>.<br />


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
