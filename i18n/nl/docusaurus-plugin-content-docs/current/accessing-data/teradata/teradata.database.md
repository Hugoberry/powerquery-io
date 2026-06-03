---
title: Teradata.Database
---

# Teradata.Database


Retourneert een tabel met SQL-tabellen en weergaven vanuit de Teradata-database.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met SQL-tabellen en weergaven geretourneerd die beschikbaar zijn in een Teradata-database op server `server`. De poort kan optioneel worden opgegeven bij de server, gescheiden door een dubbele punt. U kunt een optionele recordparameter `options` opgeven voor besturing van de volgende opties:

-   `CreateNavigationProperties` : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).
-   `NavigationPropertyNameGenerator` : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.
-   `Query` : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.
-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `HierarchicalNavigation` : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).

De recordparameter wordt bijvoorbeeld opgegeven als \[option1 = value1, option2 = value2...\] of \[Query = "select ..."\].



## Category
Accessing data
