---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Hiermee wordt een fuzzy join uitgevoerd tussen tabellen voor de opgegeven kolommen en wordt het resultaat van de join in een nieuwe kolom weergegeven.


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

Hiermee worden de rijen van `table1` gekoppeld met de rijen van `table2` op basis van fuzzy overeenkomsten voor de waarden van de sleutelkolommen die zijn geselecteerd door `key1` (voor `table1`) en `key2` (voor `table2`). De resultaten worden geretourneerd in een nieuwe kolom met de naam `newColumnName`.

Bij fuzzy overeenkomsten wordt gezocht naar een vergelijking op basis van vergelijkbaarheid van tekst in plaats van gelijkheid van tekst.

Met het optionele item `joinKind` wordt het soort join opgegeven dat moet worden uitgevoerd. Standaard wordt een left outer join uitgevoerd als er geen waarde voor `joinKind` is opgegeven. Opties zijn onder andere:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Een optionele set van `joinOptions` kan worden opgenomen om aan te geven hoe de sleutelkolommen moeten worden vergeleken. Opties zijn onder andere:

-   `ConcurrentRequests` : Een getal tussen 1 en 8 waarmee het aantal parallelle threads wordt opgegeven dat moet worden gebruikt voor fuzzy overeenkomsten. De standaardwaarde is 1.
-   `Culture` : Hiermee kunt u overeenkomende records zoeken op basis van cultuurspecifieke regels. Dit kan elke geldige cultuurnaam zijn. Met de cultuuroptie nl-NL worden overeenkomende records bijvoorbeeld gezocht op basis van de Nederlandse cultuur. De standaardwaarde is "", waarbij wordt gezocht naar overeenkomsten op basis van de niet-variabele Engelse cultuur.
-   `IgnoreCase` : Een logische waarde (waar/onwaar) voor niet-hoofdlettergevoelige sleutelovereenkomsten. Als de waarde op waar is ingesteld, is 'Druiven' bijvoorbeeld een overeenkomst met 'druiven'. De standaardwaarde is waar.
-   `IgnoreSpace` : Een logische waarde (waar/onwaar) voor het combineren van tekstonderdelen om naar overeenkomsten te zoeken. Als de waarde op waar is ingesteld, is 'Drui ven' bijvoorbeeld een overeenkomst voor 'druiven'. De standaardwaarde is waar.
-   `NumberOfMatches` : Een geheel getal waarmee het maximumaantal overeenkomende rijen dat kan worden geretourneerd, wordt opgegeven voor iedere invoerrij. Met de waarde 1 wordt bijvoorbeeld maximaal één overeenkomende rij geretourneerd voor elke rij met invoer. Als deze optie niet is opgegeven, worden alle overeenkomende rijen geretourneerd.
-   `SimilarityColumnName` : Een naam voor de kolom waarin de overeenkomst wordt weergegeven tussen een invoerwaarde en de representatieve waarde voor die invoer. De standaardwaarde is null. In dat geval wordt er geen nieuwe kolom voor overeenkomsten toegevoegd.
-   `Threshold` : Een getal tussen 0,00 en 1,00 dat de overeenkomstscore aangeeft waarbij twee waarden worden vergeleken. Bijvoorbeeld, 'Druiven' en 'Druien' (de 'v' ontbreekt) komen alleen overeen als deze optie is ingesteld op minder dan 0,90. Een drempel van 1,00 staat alleen exacte overeenkomsten toe. (Merk op dat een vage 'exacte overeenkomst' verschillen zoals hoofdletters, woordvolgorde en interpunctie kan negeren.) De standaardwaarde is 0,80.
-   `TransformationTable` : Een tabel waarmee u overeenkomende records kunt zoeken op basis van aangepaste waardetoewijzingen. De tabel moet een kolom Van en een kolom Naar bevatten. Zo wordt 'Druiven' gevonden als overeenkomst voor 'Rozijnen' als er een transformatietabel wordt opgegeven met in de kolom Van de waarde 'Druiven' en de in kolom Naar de waarde 'Rozijnen'. De transformatie wordt toegepast op alle instanties van de tekst in de transformatietabel. Met de bovenstaande transformatietabel is 'Druiven zijn zoet' dus ook een overeenkomst voor 'Rozijnen zijn zoet'.


## Examples

### Example #1
Left inner fuzzy join voor twee tabellen op basis van \[FirstName\]
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
