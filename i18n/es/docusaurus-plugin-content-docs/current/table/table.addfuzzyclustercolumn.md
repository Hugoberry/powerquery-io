---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Permite agregar una nueva columna con valores representativos obtenidos a partir de valores agrupados aproximados de la columna especificada en la tabla.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Permite agregar una nueva columna `newColumnName` a `table` con valores representativos de `columnName`. Dichos valores se obtienen mediante coincidencias aproximadas de los valores de `columnName` para cada fila.

Se puede incluir un conjunto opcional de `options` para especificar cómo deben compararse las columnas de claves. Opciones disponibles:

-   `Culture` : Permite agrupar registros según reglas específicas de una referencia cultural. Puede usarse cualquier nombre de referencia cultural válido. Por ejemplo, la opción de referencia cultural "ja-JP" agrupa registros según la referencia cultural de japonés. El valor predeterminado es "", que se basa en la referencia cultural invariable de inglés.
-   `IgnoreCase` : Valor lógico (true o false) que permite la agrupación de claves sin distinción de mayúsculas y minúsculas. Por ejemplo, si es true, "Uvas" se agrupará con "uvas". El valor predeterminado es true.
-   `IgnoreSpace` : Valor lógico (true o false) que permite combinar elementos de texto para buscar grupos. Por ejemplo, si es true, "Uv as" se agrupará con "Uvas". El valor predeterminado es true.
-   `SimilarityColumnName` : Nombre de la columna que muestra la similitud entre un valor de entrada y el valor representativo de esa entrada. El valor predeterminado es null, en cuyo caso no se agregará una nueva columna para similitudes.
-   `Threshold` : Número comprendido entre 0,00 y 1,00 que especifica la puntuación de similitud en la que se agruparán dos valores. Por ejemplo, "Uvas" y "Uas" (sin la "v") solo se agruparán juntos si esta opción estuviera establecida en menos de 0,90. Un umbral de 1,00 solo permitirá coincidencias exactas. (tenga en cuenta que una "coincidencia exacta" aproximada podría omitir diferencias, como el uso de mayúsculas y minúsculas, el orden de las palabras y la puntuación). El valor predeterminado es 0,80.
-   `TransformationTable` : Tabla que permite agrupar registros en función de asignaciones de valores personalizadas. Debe contener las columnas "Desde" y "Hasta". Por ejemplo, "Uvas" se agrupa con "Pasas" si se proporciona una tabla de transformación en la que la columna "Desde" contiene "Uva" y la columna "Hasta" contiene "Pasas". Tenga en cuenta que la transformación se aplicará a todas las repeticiones del texto en la tabla de transformación. Con la tabla de transformación anterior, "Las uvas son dulces" también se agrupará con "Las pasas son dulces".


## Examples

### Example #1
Encuentre los valores representativos para la ubicación de los empleados.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
