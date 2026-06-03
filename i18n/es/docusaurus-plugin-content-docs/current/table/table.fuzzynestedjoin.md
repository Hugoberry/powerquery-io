---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Realiza una combinación parcial de las tablas en las columnas proporcionadas y genera el resultado de la combinación en una nueva columna.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Combina las filas de `table1` con las filas de `table2` según la coincidencia aproximada de los valores de las columnas de clave seleccionadas por `key1` (para `table1`) y `key2` (para `table2`). Los resultados se especifican en la columna denominada `newColumnName`.

La coincidencia aproximada es una comparación basada en la similitud del texto, en vez de en su igualdad.

El valor opcional `joinKind` especifica el tipo de unión que se debe realizar. De manera predeterminada, se efectuará una combinación externa izquierda en caso de no especificar `joinKind`. Entre las opciones incluidas están las siguientes:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Es posible incluir un conjunto opcional de `joinOptions` para especificar el modo de comparar las columnas clave. Entre las opciones incluidas están las siguientes:

-   `ConcurrentRequests` : Número comprendido entre 1 y 8 que especifica el número de subprocesos paralelos que se usarán para la coincidencia aproximada. El valor predeterminado es 1.
-   `Culture` : Permite que los registros coincidentes se basen en reglas específicas de una referencia cultural. Puede usarse cualquier nombre de referencia cultural válido. Por ejemplo, una opción de referencia cultural de "ja-JP" coincidirá con los registros basados en la referencia cultural de japonés. El valor predeterminado es "", que se basa en la referencia cultural invariable de inglés.
-   `IgnoreCase` : Valor lógico (true o false) que permite la asociación de claves sin distinción de mayúsculas y minúsculas. Por ejemplo, si es true, "Uvas" se asociará a "uvas". El valor predeterminado es true.
-   `IgnoreSpace` : Valor lógico (true o false) que permite combinar elementos de texto para encontrar coincidencias. Por ejemplo, si es true, "Uv as" se asociará a "Uvas". El valor predeterminado es true.
-   `NumberOfMatches` : Número entero que especifica el número máximo de filas coincidentes que se pueden devolver para cada fila de entrada. Por ejemplo, un valor de 1 devolverá como máximo una fila coincidente para cada fila de entrada. Si no se proporciona esta opción, se devolverán todas las filas coincidentes.
-   `SimilarityColumnName` : Nombre de la columna que muestra la similitud entre un valor de entrada y el valor representativo de esa entrada. El valor predeterminado es null, en cuyo caso no se agregará una nueva columna para similitudes.
-   `Threshold` : Número comprendido entre 0,00 y 1,00 que especifica la puntuación de similitud en la que se asociarán dos valores. Por ejemplo, "Uvas" y "Uas" (sin la "v") solo se asociarán si esta opción estuviera establecida en menos de 0,90. Un umbral de 1,00 solo permitirá coincidencias exactas. (tenga en cuenta que una "coincidencia exacta" aproximada podría omitir diferencias, como el uso de mayúsculas y minúsculas, el orden de las palabras y la puntuación). El valor predeterminado es 0,80.
-   `TransformationTable` : Tabla que permite asociar registros en función de asignaciones de valores personalizadas. Debe contener las columnas "Desde" y "Hasta". Por ejemplo, "Uvas" se asocia a "Pasas" si se proporciona una tabla de transformación en la que la columna "Desde" contiene "Uva" y la columna "Hasta" contiene "Pasas". Tenga en cuenta que la transformación se aplicará a todas las repeticiones del texto en la tabla de transformación. Con la tabla de transformación anterior, "Las uvas son dulces" también se asociará a "Las pasas son dulces".


## Examples

### Example #1
Combinación aproximada interna izquierda de dos tablas basada en \[FirstName\]
```powerquery
Table.FuzzyNestedJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    "NestedTable",
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
