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

Hiermee wordt een nieuwe kolom <code>newColumnName</code> toegevoegd aan <code>table</code> met representatieve waarden van <code>columnName</code>. De representatieve waarden worden verkregen op basis van fuzzy overeenkomsten voor waarden in <code>columnName</code> voor de afzonderlijke rijen.    Er kan een optionele set van <code>options</code> worden opgenomen om aan te geven hoe de sleutelkolommen moeten worden vergeleken. Opties zijn onder andere:    <ul><li><code>Culture</code> : Hiermee kunt u records groeperen op basis van cultuurspecifieke regels. Dit kan elke geldige cultuurnaam zijn. Met de cultuuroptie nl-NL worden records bijvoorbeeld gegroepeerd op basis van de Nederlandse cultuur. De standaardwaarde is &quot;&quot;, waarbij wordt gegroepeerd op basis van de niet-variabele Engelse cultuur.</li><li><code>IgnoreCase</code> : Een logische waarde (waar/onwaar) voor niet-hoofdlettergevoelige sleutelgroepering. Als de waarde op waar is ingesteld, wordt &#39;Druiven&#39; bijvoorbeeld gegroepeerd met &#39;druiven&#39;. De standaardwaarde is waar.</li><li><code>IgnoreSpace</code> : Een logische waarde (waar/onwaar) voor het combineren van tekstonderdelen om naar groepen te zoeken. Als de waarde op waar is ingesteld, wordt &#39;Drui ven&#39; bijvoorbeeld gegroepeerd met &#39;druiven&#39;. De standaardwaarde is waar.</li><li><code>SimilarityColumnName</code> : Een naam voor de kolom waarin de overeenkomst wordt weergegeven tussen een invoerwaarde en de representatieve waarde voor die invoer. De standaardwaarde is null. In dat geval wordt er geen nieuwe kolom voor overeenkomsten toegevoegd.</li><li><code>Threshold</code> : Een getal tussen 0,00 en 1,00 dat de overeenkomstscore aangeeft waarbij twee waarden worden gegroepeerd. Bijvoorbeeld, &#39;Druiven&#39; en &#39;Druien&#39; (de &#39;v&#39; ontbreekt) worden alleen gegroepeerd als deze optie is ingesteld op minder dan 0,90. Een drempel van 1,00 staat alleen exacte overeenkomsten toe. (Merk op dat een vage &#39;exacte overeenkomst&#39; verschillen zoals hoofdletters, woordvolgorde en interpunctie kan negeren.) De standaardwaarde is 0,80.</li><li><code>TransformationTable</code> : Een tabel waarmee u records kunt groeperen op basis van aangepaste waardetoewijzingen. De tabel moet een kolom Van en een kolom Naar bevatten. Zo wordt &#39;Druiven&#39; gegroepeerd met &#39;Rozijnen&#39; als er een transformatietabel wordt opgegeven met in de kolom Van de waarde &#39;Druiven&#39; en de in kolom Naar de waarde &#39;Rozijnen&#39;. De transformatie wordt toegepast op alle instanties van de tekst in de transformatietabel. Met de bovenstaande transformatietabel wordt &#39;Druiven zijn zoet&#39; dus ook gegroepeerd met &#39;Rozijnen zijn zoet&#39;.</li></ul><br />    


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
