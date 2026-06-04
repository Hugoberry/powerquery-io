---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Executa unha asociación parcial entre táboas en columnas fornecidas e produce o resultado da unión nunha nova columna.


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

Une as filas de `table1` coas filas de `table2` baseándose na coincidencia parcial dos valores das columnas clave seleccionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados devólvense nunha columna nova denominada `newColumnName`.

A coincidencia parcial é unha comparación baseada na similitude do texto, non na igualdade deste.

O `joinKind` opcional especifica o tipo de asociación que realizar. Por defecto, execútase unha combinación externa esquerda se non se especifica ningún `joinKind`. As opcións inclúen:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Pode incluírse un conxunto opcional de `joinOptions` para especificar como realizar a comparación das columnas clave. As opcións inclúen:

-   `ConcurrentRequests` : Un número entre 1 e 8 que especifica o número de subprocesos paralelos que se van usar para as coincidencias parciais. O valor predefinido é 1.
-   `Culture` : Permite buscar coincidencias en rexistros segundo regras específicas da referencia cultural. Pode ser calquera nome de referencia cultural válido. Por exemplo, un opción de referencia cultural de "ja-JP" agrupa rexistros segundo a referencia cultural Xaponés. O valor predefinido é "", que busca coincidencias segundo a referencia cultural Inglés invariable.
-   `IgnoreCase` : Valor lóxico (verdadeiro/falso) que permite buscar coincidencias en claves sen diferenciar entre maiúsculas e minúsculas. Por exemplo, se é verdadeiro, "Grapes" agrúpase con "grapes". O valor predefinido é verdadeiro.
-   `IgnoreSpace` : Valor lóxico (verdadeiro/falso) que permite combinar partes de texto para buscar coincidencias. Por exemplo, se é verdadeiro, "Gra pes" agrúpase con "Grapes". O valor predefinido é verdadeiro.
-   `NumberOfMatches` : Número enteiro que especifica o número máximo de filas coincidentes que se pode devolver para cada fila de entrada. Por exemplo, un valor de 1 devolverá como máximo unha fila coincidente para cada fila de entrada. Se non se fornece esta opción, devólvense todas as filas coincidentes.
-   `SimilarityColumnName` : Nome para a columna que mostra a semellanza entre un valor de entrada e o valor representativo para a devandita entrada. O valor predefinido é null e, nese caso, non se pode engadir unha columna para semellanzas nova.
-   `Threshold` : Número entre 0,00 e 1,00 que especifica a puntuación de semellanza na que se farán coincidir dous valores. Por exemplo, "Grapes" e "Graes" (falta o "p") fanse coincidir só se esta opción está configurada en menos de 0,90. Un limiar de 1,00 permite só coincidencias exactas. (Téñase en conta que unha “coincidencia exacta” aproximada pode ignorar diferenzas como maiúsculas e minúsculas, orde das palabras e puntuación). O valor predefinido é 0,80.
-   `TransformationTable` : Táboa que permite facer coincidir rexistros segundo asignacións de valores personalizadas. Debe conter as columnas "Desde" e "Até". Por exemplo, "Grapes" faise coincidir con "Raisins" se se fornece unha táboa de transformación na que a columna "Desde" conteña "Grapes" e a columna "Até" conteña "Raisins". Teña en conta que se aplicará a transformación a todas as ocorrencias do texto na táboa de transformación. Coa táboa de transformación anterior, "Grapes are sweet" faise coincidir tamén con "Raisins are sweet".


## Examples

### Example #1
Combinación parcial interna esquerda de dúas táboas baseadas en \[FirstName\]
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
