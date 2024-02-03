---
title: MySQL.Database
---

# MySQL.Database


## Description

Retourneert een tabel met SQL-tabellen, weergaven en opgeslagen scalaire functies die beschikbaar zijn in een MySQL-database.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Hiermee wordt een tabel met SQL-tabellen, weergaven en opgeslagen scalaire functies geretourneerd die beschikbaar zijn in een MySQL-database op server <code>server</code> in de database-instantie met de naam <code>database</code>. De poort kan optioneel worden opgegeven bij de server, gescheiden door een dubbele punt. Een optionele recordparameter <code>options</code> kan worden opgegeven om de volgende opties te bepalen:    <ul><li><code>Encoding</code> : Een TextEncoding waarde waarmee de tekenset wordt opgegeven die is gebruikt voor het coderen van alle query&#39;s die naar de server zijn verzonden (standaard is null).</li><li><code>CreateNavigationProperties</code> : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).</li><li><code>NavigationPropertyNameGenerator</code> : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.</li><li><code>Query</code> : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>TreatTinyAsBoolean</code> : Een logische waarde (true/false) waarmee wordt bepaald of kolommen van het type tinyint op de server moeten worden geforceerd als logische waarden. De standaardinstelling is true.</li><li><code>OldGuids</code> : Een logische waarde (true/false) waarmee wordt ingesteld of kolommen van het type char(36), indien false, of kolommen van het type binary(16), indien true, worden verwerkt als GUID&#39;s. De standaardinstelling is false.</li><li><code>ReturnSingleDatabase</code> : Een logische waarde (true/false) waarmee wordt ingesteld of alle tabellen van alle databases moeten worden geretourneerd (indien false) of dat tabellen en weergaven van de opgegeven database moeten worden geretourneerd (indien true). De standaardinstelling is false.</li><li><code>HierarchicalNavigation</code> : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).</li></ul>    De recordparameter wordt bijvoorbeeld opgegeven als [option1 = value1, option2 = value2...] of [Query = "select ..."].    



## Category
Accessing data
