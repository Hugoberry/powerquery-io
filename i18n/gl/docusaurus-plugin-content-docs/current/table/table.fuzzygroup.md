---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Agrupa filas na táboa segundo a coincidencia aproximada das claves.


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

Agrupa as filas de `table` por valores con coincidencias parciais na columna especificada, `key`, para cada fila. Para cada grupo, constrúese un rexistro que contén as columnas de clave (e os seus valores) xunto coas columnas agregadas especificadas por `aggregatedColumns`. Esta función non garante que se vaia devolver unha orde fixa de filas.

Pódese incluír un conxunto de `options` opcional para especificar como comparar as columnas de clave. As opcións inclúen:

-   `Culture` : Permite agrupar rexistros segundo regras específicas da referencia cultural. Pode ser calquera nome de referencia cultural válido. Por exemplo, un opción de referencia cultural de "ja-JP" agrupa rexistros segundo a referencia cultural Xaponés. O valor predefinido é "", que agrupa segundo a referencia cultural Inglés invariable.
-   `IgnoreCase` : Valor lóxico (verdadeiro/falso) que permite agrupar claves sen diferenciar entre maiúsculas e minúsculas. Por exemplo, se é verdadeiro, "Grapes" agrúpase con "grapes". O valor predefinido é verdadeiro.
-   `IgnoreSpace` : Valor lóxico (verdadeiro/falso) que permite combinar partes de texto para buscar grupos. Por exemplo, se é verdadeiro, "Gra pes" agrúpase con "Grapes". O valor predefinido é verdadeiro.
-   `SimilarityColumnName` : Nome para a columna que mostra a semellanza entre un valor de entrada e o valor representativo para a devandita entrada. O valor predefinido é null e, nese caso, non se pode engadir unha columna para semellanzas nova.
-   `Threshold` : Número entre 0,00 e 1,00 que especifica a puntuación de semellanza na que se agruparán dous valores. Por exemplo, "Grapes" e "Graes" (falta o "p") agruparanse só se esta opción está configurada en menos de 0,90. Un limiar de 1,00 permite só coincidencias exactas. (Téñase en conta que unha “coincidencia exacta” aproximada pode ignorar diferenzas como maiúsculas e minúsculas, orde das palabras e puntuación). O valor predefinido é 0,80.
-   `TransformationTable` : Táboa que permite agrupar rexistros segundo asignacións de valores personalizadas. Debe conter as columnas "Desde" e "Até". Por exemplo, "Grapes" agrúpase con "Raisins" se se fornece unha táboa de transformación na que a columna "Desde" conteña "Grapes" e a columna "Até" conteña "Raisins". Teña en conta que se aplicará a transformación a todas as ocorrencias do texto na táboa de transformación. Coa táboa de transformación anterior, "Grapes are sweet" agruparase tamén con "Raisins are sweet".


## Examples

### Example #1
Agrupa a táboa engadindo unha columna agregada \[Count\] que conteña o número de empregados en cada localización (`each Table.RowCount(_)`).
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
