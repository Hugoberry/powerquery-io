---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Afegeix una columna nova amb valors representatius obtinguts a partir de l'agrupació difusa de valors de la columna especificada de la taula.


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

Afegeix una columna nova `newColumnName` a `table` amb valors representatius de `columnName`. Els valors representatius s'obtenen mitjançant la creació de coincidències aproximades dels valors de `columnName` per a cada fila.

Es pot incloure un conjunt opcional de `options` per especificar com es comparen les columnes clau. Les opcions inclouen:

-   `Culture` : Permet agrupar registres en funció de normes específiques de la referència cultural. Pot ser qualsevol nom de referència cultural vàlid. Per exemple, una opció de referència cultural "ja-JP" agrupa els registres segons la cultura japonesa. El valor per defecte és "", que fa agrupacions basades en la referència cultural invariable Anglès.
-   `IgnoreCase` : Valor lògic (true o false) que permet l'agrupació de claus que no diferencien entre majúscules i minúscules. Per exemple, si és true, "Raïm" s'agrupa amb "grapes". El valor per defecte és true.
-   `IgnoreSpace` : Valor lògic (true o false) que permet la combinació de parts del text per trobar grups. Per exemple, si és true, "Gra pes" s'agrupa amb "Grapes". El valor per defecte és true.
-   `SimilarityColumnName` : Nom de la columna que mostra la similitud entre un valor d'entrada i el valor representatiu de l'entrada. El valor per defecte és nul i, en aquest cas, no s'afegirà cap columna nova per a les similituds.
-   `Threshold` : Nombre entre 0,00 i 1,00 que especifica la puntuació de similitud en què s'agruparan dos valors. Per exemple, "Grapes" i "Graes" (falta la "p") només s'agrupen si aquesta opció està definida amb un valor inferior a 0,90. Un llindar d'1,00 només permet coincidències exactes. (Tingueu en compte que una "coincidència exacta" aproximada podria ignorar diferències com ara l'ús de majúscules i minúscules, l'ordre de les paraules i la puntuació.) El valor per defecte és 0,80.
-   `TransformationTable` : Taula que permet agrupar registres en funció de les assignacions de valors personalitzats. Hauria de contenir les columnes "From" i "To". Per exemple, "Grapes" s'agrupa amb "Raisins" si es proporciona una taula de transformació amb una columna "From" que conté "Grapes" i una columna "To" que conté "Raisins". Tingueu en compte que la transformació s'aplicarà a totes les aparicions del text a la taula de transformació. Amb la taula de transformació anterior, "Grapes are sweet" també s'agruparà amb "Raisins are sweet".


## Examples

### Example #1
Cerqueu els valors representatius de la ubicació dels empleats.
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
