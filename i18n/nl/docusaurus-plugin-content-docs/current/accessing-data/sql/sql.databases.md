---
title: Sql.Databases
---

# Sql.Databases


Retourneert een tabel met databases op een SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met databases op de opgegeven SQL-server `server` geretourneerd. U kunt een optionele recordparameter `options` opgeven voor besturing van de volgende opties:

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

De recordparameter wordt bijvoorbeeld opgegeven als \[option1 = value1, option2 = value2...\].  
  
Biedt geen ondersteuning voor het instellen van een SQL-query om uit te voeren op de server. `Sql.Database` moet worden gebruikt om een SQL-query uit te voeren.



## Category
Accessing data
