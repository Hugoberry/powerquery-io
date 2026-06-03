---
title: Sql.Database
---

# Sql.Database


Retourneert een tabel met SQL-tabellen, weergaven en opgeslagen functies vanuit de SQL Server-database.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met SQL-tabellen, weergaven en opgeslagen functies geretourneerd die beschikbaar zijn in de SQL Server-database `database` op de server `server`. De poort kan optioneel worden opgegeven bij de server, gescheiden door een dubbele punt of een komma. U kunt een optionele recordparameter `options` opgeven voor besturing van de volgende opties:

-   `Query` : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.
-   `CreateNavigationProperties` : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).
-   `NavigationPropertyNameGenerator` : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.
-   `MaxDegreeOfParallelism` : Een getal waarmee de waarde van de querycomponent maxdop in de gegenereerde SQL-query wordt ingesteld.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.
-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `HierarchicalNavigation` : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).
-   `MultiSubnetFailover` : Een logische waarde (true/false) waarmee de waarde van de eigenschap MultiSubnetFailover in de verbindingsreeks wordt ingesteld (de standaardinstelling is false).
-   `UnsafeTypeConversions` : Een logische waarde (waar/onwaar) waarbij indien waar, een poging tot invouwen van typeconversies wordt gedaan die kan mislukken en waardoor de volledige query mislukt. Niet aanbevolen voor algemeen gebruik.
-   `ContextInfo` : Een binaire waarde die wordt gebruikt om de CONTEXT\_INFO in te stellen voordat elke opdracht wordt uitgevoerd.
-   `OmitSRID` : Een logische waarde (waar/onwaar) waarbij indien waar, de SRID wordt weggelaten bij het produceren van de WKT-weergave (Well-Known Text) van geometrie- en geografietypen.
-   `EnableCrossDatabaseFolding` : Een logische waarde (waar/onwaar) die, indien waar, het vouwen van query's toestaat voor databases op dezelfde server. De standaardwaarde is onwaar.

De recordparameter wordt bijvoorbeeld opgegeven als \[option1 = value1, option2 = value2...\] of \[Query = "select ..."\].



## Category
Accessing data
