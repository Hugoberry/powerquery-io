---
title: MySQL.Database
---

# MySQL.Database


Retourneert een tabel met SQL-tabellen, weergaven en opgeslagen scalaire functies die beschikbaar zijn in een MySQL-database.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met SQL-tabellen, weergaven en opgeslagen scalaire functies geretourneerd die beschikbaar zijn in een MySQL-database op server `server` in de database-instantie met de naam `database`. De poort kan optioneel worden opgegeven bij de server, gescheiden door een dubbele punt. U kunt een optionele recordparameter `options` opgeven voor besturing van de volgende opties:

-   `Encoding` : Een TextEncoding waarde waarmee de tekenset wordt opgegeven die is gebruikt voor het coderen van alle query's die naar de server zijn verzonden (standaard is null).
-   `CreateNavigationProperties` : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).
-   `NavigationPropertyNameGenerator` : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.
-   `Query` : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.
-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `TreatTinyAsBoolean` : Een logische waarde (true/false) waarmee wordt bepaald of kolommen van het type tinyint op de server moeten worden geforceerd als logische waarden. De standaardinstelling is true.
-   `OldGuids` : Een logische waarde (true/false) waarmee wordt ingesteld of kolommen van het type char(36), indien false, of kolommen van het type binary(16), indien true, worden verwerkt als GUID's. De standaardinstelling is false.
-   `ReturnSingleDatabase` : Een logische waarde (true/false) waarmee wordt ingesteld of alle tabellen van alle databases moeten worden geretourneerd (indien false) of dat tabellen en weergaven van de opgegeven database moeten worden geretourneerd (indien true). De standaardinstelling is false.
-   `HierarchicalNavigation` : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).

De recordparameter wordt bijvoorbeeld opgegeven als \[option1 = value1, option2 = value2...\] of \[Query = "select ..."\].



## Category
Accessing data
