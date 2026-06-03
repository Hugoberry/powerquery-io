---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Agrupa las filas de la tabla según las coincidencias aproximadas de las claves.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Permite agrupar las filas de `table` por coincidencias aproximadas de los valores en la columna especificada, `key`, para cada fila. Para cada grupo, se crea un registro que contiene las columnas de claves y sus valores junto con las columnas agregadas especificadas por `aggregatedColumns`. Esta función no puede garantizar que se devuelva un orden de filas fijo.

Se puede incluir un conjunto opcional de `options` para especificar cómo deben compararse las columnas de claves. Opciones disponibles:

-   `Culture` : Permite agrupar registros según reglas específicas de una referencia cultural. Puede usarse cualquier nombre de referencia cultural válido. Por ejemplo, la opción de referencia cultural "ja-JP" agrupa registros según la referencia cultural de japonés. El valor predeterminado es "", que se basa en la referencia cultural invariable de inglés.
-   `IgnoreCase` : Valor lógico (true o false) que permite la agrupación de claves sin distinción de mayúsculas y minúsculas. Por ejemplo, si es true, "Uvas" se agrupará con "uvas". El valor predeterminado es true.
-   `IgnoreSpace` : Valor lógico (true o false) que permite combinar elementos de texto para buscar grupos. Por ejemplo, si es true, "Uv as" se agrupará con "Uvas". El valor predeterminado es true.
-   `SimilarityColumnName` : Nombre de la columna que muestra la similitud entre un valor de entrada y el valor representativo de esa entrada. El valor predeterminado es null, en cuyo caso no se agregará una nueva columna para similitudes.
-   `Threshold` : Número comprendido entre 0,00 y 1,00 que especifica la puntuación de similitud en la que se agruparán dos valores. Por ejemplo, "Uvas" y "Uas" (sin la "v") solo se agruparán juntos si esta opción estuviera establecida en menos de 0,90. Un umbral de 1,00 solo permitirá coincidencias exactas. (tenga en cuenta que una "coincidencia exacta" aproximada podría omitir diferencias, como el uso de mayúsculas y minúsculas, el orden de las palabras y la puntuación). El valor predeterminado es 0,80.
-   `TransformationTable` : Tabla que permite agrupar registros en función de asignaciones de valores personalizadas. Debe contener las columnas "Desde" y "Hasta". Por ejemplo, "Uvas" se agrupa con "Pasas" si se proporciona una tabla de transformación en la que la columna "Desde" contiene "Uva" y la columna "Hasta" contiene "Pasas". Tenga en cuenta que la transformación se aplicará a todas las repeticiones del texto en la tabla de transformación. Con la tabla de transformación anterior, "Las uvas son dulces" también se agrupará con "Las pasas son dulces".


## Examples

### Example #1
Agrupa la tabla agregando una columna de agregado \[Count\] que contiene el número de empleados en cada ubicación (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
