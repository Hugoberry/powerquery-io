---
title: Table.View
---

# Table.View


Crea ou amplía unha táboa con controladores definidos polo usuario para operacións de consulta e acción.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Devolve unha vista de `table` na que as funcións especificadas en `handlers` se usan en lugar do comportamento predefinido dunha operación cando esta se aplica á vista.

Se se fornece `table`, todas as demais funcións do controlador son opcionais. Se `table` non se fornece, precísanse as funcións dos controladores `GetType` e `GetRows`. Se non se especifica unha función de controlador para unha operación, aplicarase o comportamento predefinido da operación a `table` no seu lugar (excepto no caso de `GetExpression`).

As funcións do controlador deben devolver un valor equivalente semanticamente ao resultado de aplicar a operación en `table` (ou a vista resultante no caso de `GetExpression`).

Se unha función de controlador provoca un erro, o comportamento predefinido da operación aplícase á vista.

`Table.View` pode usarse para implantar o pregamento a unha orixe de datos: a tradución de consultas M en consultas específicas de orixe (por exemplo, para crear declaracións T-SQL a partir de consultas M).

Consulta a documentación publicada para obter unha descrición máis completa de `Table.View`.


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
