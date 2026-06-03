---
title: Table.View
---

# Table.View


Crea o amplía una tabla con controladores definidos por el usuario para operaciones de consulta y acción.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Devuelve una vista de `table` dónde se usan las funciones especificadas en `handlers` son usadas en lugar del comportamiento predeterminado de una operación cuando la operación se aplica a la vista.

Si `table` se proporciona, todas las funciones del controlador son opcionales. Si `table` no se proporciona, se requieren las funciones de controlador `GetType` y `GetRows`. Si no se especifica una función de controlador para una operación, en su lugar se aplica el comportamiento predeterminado de la operación a `table` (excepto en el caso de `GetExpression`).

Las funciones de controlador deben devolver un valor que es semánticamente equivalente al resultado de aplicar la operación contra `table` (o la vista resultante en el caso de `GetExpression` ).

Si una función de controlador genera un error, el comportamiento predeterminado de la operación se aplica a la vista.

`Table.View` se puede usar para implementar el plegado a una fuente de datos: la traducción de consultas M en consultas específicas de la fuente (por ejemplo, para crear declaraciones T-SQL a partir de consultas M).

Consulte la documentación publicada del conector personalizado de Power Query para obtener una descripción más completa de `Table.View`.


## Examples

### Example #1
Cree una vista básica que no requiera tener acceso a las filas para determinar el tipo o el recuento de filas.
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
