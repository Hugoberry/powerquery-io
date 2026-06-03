---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Permite combinar las filas de las dos tablas que coinciden de forma aproximada en función de las claves facilitadas.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Combina las filas de `table1` con las de `table2` de acuerdo con una coincidencia aproximada de los valores de las columnas de claves seleccionadas por `key1` (para `table1`) y `key2` (para `table2`).

La coincidencia aproximada es en una comparación basada en la similitud del texto, en vez de en su igualdad.

De forma predeterminada, se realiza una combinación interna, pero se puede incluir un valor `joinKind` opcional para especificar el tipo de combinación. Opciones disponibles:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Se puede incluir un conjunto opcional de `joinOptions` para especificar cómo deben compararse las columnas de claves. Opciones disponibles:

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
Table.FuzzyJoin(
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
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
