---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Hiermee wordt een nieuwe kolom met representatieve waarden toegevoegd die zijn verkregen door fuzzy groeperingswaarden van de opgegeven kolom in de tabel.


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

Hiermee wordt een nieuwe kolom `newColumnName` toegevoegd aan `table` met representatieve waarden van `columnName`. De representatieve waarden worden verkregen op basis van fuzzy overeenkomsten voor waarden in `columnName` voor de afzonderlijke rijen.

Er kan een optionele set van `options` worden opgenomen om aan te geven hoe de sleutelkolommen moeten worden vergeleken. Opties zijn onder andere:

-   `Culture` : Hiermee kunt u records groeperen op basis van cultuurspecifieke regels. Dit kan elke geldige cultuurnaam zijn. Met de cultuuroptie nl-NL worden records bijvoorbeeld gegroepeerd op basis van de Nederlandse cultuur. De standaardwaarde is "", waarbij wordt gegroepeerd op basis van de niet-variabele Engelse cultuur.
-   `IgnoreCase` : Een logische waarde (waar/onwaar) voor niet-hoofdlettergevoelige sleutelgroepering. Als de waarde op waar is ingesteld, wordt 'Druiven' bijvoorbeeld gegroepeerd met 'druiven'. De standaardwaarde is waar.
-   `IgnoreSpace` : Een logische waarde (waar/onwaar) voor het combineren van tekstonderdelen om naar groepen te zoeken. Als de waarde op waar is ingesteld, wordt 'Drui ven' bijvoorbeeld gegroepeerd met 'druiven'. De standaardwaarde is waar.
-   `SimilarityColumnName` : Een naam voor de kolom waarin de overeenkomst wordt weergegeven tussen een invoerwaarde en de representatieve waarde voor die invoer. De standaardwaarde is null. In dat geval wordt er geen nieuwe kolom voor overeenkomsten toegevoegd.
-   `Threshold` : Een getal tussen 0,00 en 1,00 dat de overeenkomstscore aangeeft waarbij twee waarden worden gegroepeerd. Bijvoorbeeld, 'Druiven' en 'Druien' (de 'v' ontbreekt) worden alleen gegroepeerd als deze optie is ingesteld op minder dan 0,90. Een drempel van 1,00 staat alleen exacte overeenkomsten toe. (Merk op dat een vage 'exacte overeenkomst' verschillen zoals hoofdletters, woordvolgorde en interpunctie kan negeren.) De standaardwaarde is 0,80.
-   `TransformationTable` : Een tabel waarmee u records kunt groeperen op basis van aangepaste waardetoewijzingen. De tabel moet een kolom Van en een kolom Naar bevatten. Zo wordt 'Druiven' gegroepeerd met 'Rozijnen' als er een transformatietabel wordt opgegeven met in de kolom Van de waarde 'Druiven' en de in kolom Naar de waarde 'Rozijnen'. De transformatie wordt toegepast op alle instanties van de tekst in de transformatietabel. Met de bovenstaande transformatietabel wordt 'Druiven zijn zoet' dus ook gegroepeerd met 'Rozijnen zijn zoet'.


## Examples

### Example #1
Zoek de representatieve waarden voor de locatie van de werknemers.
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
