---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Permet unir les files de les dues taules que coincideixen de manera aproximada en funció de les claus facilitades.


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

Uneix les files per a `table1` amb aquelles per a `table2` d'acord amb una coincidència aproximada dels valors de les columnes clau seleccionades per `key1` (per a `table1`) i `key2` (per a `table2`).

Les coincidències aproximades consisteixen en una comparació basada en la similitud del text, més que no pas en el fet que sigui més o menys igual.

Per defecte, es realitza una unió interna. Tanmateix, es pot incloure un element `joinKind` opcional per especificar el tipus d'unió. Opcions incloses:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

S'hi pot incloure un conjunt opcional (`joinOptions`) per especificar com cal comparar les columnes clau. Opcions incloses:

-   `ConcurrentRequests` : Nombre entre l'1 i el 8 que especifica el nombre de fils paral·lels que s'utilitzaran per a la coincidència aproximada. El valor per defecte és 1.
-   `Culture` : Permet la coincidència dels registres en funció de normes específiques de la cultura. Pot ser qualsevol nom de referència cultural vàlid. Per exemple, una opció de referència cultural "ja-JP" crea coincidències entre els registres segons la cultura japonesa. El valor per defecte és "", que crea coincidències basades en la referència cultural invariable Anglès.
-   `IgnoreCase` : Valor lògic (true o false) que permet la coincidència de claus que no diferencien entre majúscules i minúscules. Per exemple, si és true, "Grapes" coincideix amb "grapes". El valor per defecte és true.
-   `IgnoreSpace` : Valor lògic (true o false) que permet la combinació de parts del text per trobar coincidències. Per exemple, si és true, "Gra pes" coincideix amb "Grapes". El valor per defecte és true.
-   `NumberOfMatches` : Nombre enter que especifica el nombre màxim de files coincidents que es poden retornar per a cada fila d'entrada. Per exemple, un valor d'1 retornarà com a màxim una fila coincident per a cada fila d'entrada. Si no es proporciona aquesta opció, es retornaran totes les files coincidents.
-   `SimilarityColumnName` : Nom de la columna que mostra la similitud entre un valor d'entrada i el valor representatiu de l'entrada. El valor per defecte és nul i, en aquest cas, no s'afegirà cap columna nova per a les similituds.
-   `Threshold` : Nombre entre 0,00 i 1,00 que especifica la puntuació de similitud en què coincidiran dos valors. Per exemple, "Grapes" i "Graes" (falta la "p") només coincideixen si aquesta opció està definida amb un valor inferior a 0,90. Un llindar d'1,00 només permet coincidències exactes. (Tingueu en compte que una "coincidència exacta" aproximada podria ignorar diferències com ara l'ús de majúscules i minúscules, l'ordre de les paraules i la puntuació.) ·El valor per defecte és 0,80.
-   `TransformationTable` : Taula que permet crear coincidències dels registres en funció de les assignacions de valors personalitzats. Hauria de contenir les columnes "From" i "To". Per exemple, "Grapes" coincideix amb "Raisins" si es proporciona una taula de transformació amb una columna "From" que conté "Grapes" i una columna "To" que conté "Raisins". Tingueu en compte que la transformació s'aplicarà a totes les aparicions del text a la taula de transformació. Amb la taula de transformació anterior, "Grapes are sweet" també coincidirà amb "Raisins are sweet".


## Examples

### Example #1
Unió aproximada interna esquerra de dues taules basada en \[FirstName\]
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
