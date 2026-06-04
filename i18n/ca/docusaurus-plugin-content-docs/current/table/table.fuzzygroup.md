---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Agrupa les files de la taula a partir d'una coincidència aproximada de les claus.


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

Agrupa les files de `table` mitjançant la creació de coincidències aproximades dels valors de la columna especificada `key` per a cada fila. Per a cada grup, es construeix un registre que conté les columnes clau (i els seus valors) juntament amb qualsevol columna agregada que hagi especificat `aggregatedColumns`. Aquesta funció no pot garantir que es retorni un ordre fix de files.

Es pot incloure un conjunt opcional d'elements `options` per especificar com es comparen les columnes clau. Les opcions inclouen:

-   `Culture` : Permet agrupar registres en funció de normes específiques de la referència cultural. Pot ser qualsevol nom de referència cultural vàlid. Per exemple, una opció de referència cultural "ja-JP" agrupa els registres segons la cultura japonesa. El valor per defecte és "", que fa agrupacions basades en la referència cultural invariable Anglès.
-   `IgnoreCase` : Valor lògic (true o false) que permet l'agrupació de claus que no diferencien entre majúscules i minúscules. Per exemple, si és true, "Raïm" s'agrupa amb "grapes". El valor per defecte és true.
-   `IgnoreSpace` : Valor lògic (true o false) que permet la combinació de parts del text per trobar grups. Per exemple, si és true, "Gra pes" s'agrupa amb "Grapes". El valor per defecte és true.
-   `SimilarityColumnName` : Nom de la columna que mostra la similitud entre un valor d'entrada i el valor representatiu de l'entrada. El valor per defecte és nul i, en aquest cas, no s'afegirà cap columna nova per a les similituds.
-   `Threshold` : Nombre entre 0,00 i 1,00 que especifica la puntuació de similitud en què s'agruparan dos valors. Per exemple, "Grapes" i "Graes" (falta la "p") només s'agrupen si aquesta opció està definida amb un valor inferior a 0,90. Un llindar d'1,00 només permet coincidències exactes. (Tingueu en compte que una "coincidència exacta" aproximada podria ignorar diferències com ara l'ús de majúscules i minúscules, l'ordre de les paraules i la puntuació.) El valor per defecte és 0,80.
-   `TransformationTable` : Taula que permet agrupar registres en funció de les assignacions de valors personalitzats. Hauria de contenir les columnes "From" i "To". Per exemple, "Grapes" s'agrupa amb "Raisins" si es proporciona una taula de transformació amb una columna "From" que conté "Grapes" i una columna "To" que conté "Raisins". Tingueu en compte que la transformació s'aplicarà a totes les aparicions del text a la taula de transformació. Amb la taula de transformació anterior, "Grapes are sweet" també s'agruparà amb "Raisins are sweet".


## Examples

### Example #1
Group the table adding an aggregate column \[Count\] that contains the number of employees in each location (`each Table.RowCount(_)`).
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
