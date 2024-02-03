---
title: Table.View
---

# Table.View


## Description

Crea ou amplía unha táboa con controladores definidos polo usuario para operacións de consulta e acción.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Devolve unha vista de <code>table</code> na que as funcións especificadas en <code>handlers</code> se usan en lugar do comportamento predefinido dunha operación cando esta se aplica á vista.<br />Se se fornece <code>table</code>, todas as demais funcións do controlador son opcionais. Se <code>table</code> non se fornece, precísanse as funcións dos controladores <code>GetType</code> e <code>GetRows</code>. Se non se especifica unha función de controlador para unha operación, aplicarase o comportamento predefinido da operación a <code>table</code> no seu lugar (excepto no caso de <code>GetExpression</code>).<br />As funcións do controlador deben devolver un valor equivalente semanticamente ao resultado de aplicar a operación en <code>table</code> (ou a vista resultante no caso de <code>GetExpression</code>).<br />Se unha función de controlador provoca un erro, o comportamento predefinido da operación aplícase á vista.<br /><code>Table.View</code> pode usarse para implantar o pregamento a unha orixe de datos: a tradución de consultas M en consultas específicas de orixe (por exemplo, para crear declaracións T-SQL a partir de consultas M).<br />Consulta a documentación publicada para obter unha descrición máis completa de <code>Table.View</code>.<br />


## Examples

### Example #1 
Crea unha visualización básica que non precise ter acceso ás filas para descubrir o tipo ou reconto das filas.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
