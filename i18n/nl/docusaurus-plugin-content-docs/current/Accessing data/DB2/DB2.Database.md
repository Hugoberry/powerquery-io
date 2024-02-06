---
title: DB2.Database
---

# DB2.Database


Hiermee wordt een tabel met SQL-tabellen en weergaven geretourneerd die beschikbaar zijn in een Db2-database.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met SQL-tabellen en weergaven geretourneerd die beschikbaar zijn in een DB2-database op server <code>server</code> in de database-instantie met de naam <code>database</code>. De poort kan optioneel worden opgegeven bij de server, gescheiden door een dubbele punt. Een optionele recordparameter <code>options</code> kan worden opgegeven om de volgende opties te bepalen:    <ul><li><code>CreateNavigationProperties</code> : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).</li><li><code>NavigationPropertyNameGenerator</code> : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.</li><li><code>Query</code> : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>HierarchicalNavigation</code> : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).</li><li><code>Implementation</code> : Hiermee wordt de implementatie van de interne databaseprovider opgegeven die moet worden gebruikt. Geldige waarden zijn IBM en Microsoft.</li><li><code>BinaryCodePage</code> : Een getal voor CCSID (Coded Character Set Identifier) om binaire Db2 FOR BIT-gegevens om te zetten in tekenreeksen. Dit is van toepassing op Implementation = Microsoft. Stel 0 in om de conversie uit te schakelen (standaard). Stel 1 in om de conversie uit te voeren op basis van databasecodering. Stel een ander CCSID-getal in om de conversie uit te voeren naar toepassingscodering.</li><li><code>PackageCollection</code> : Hiermee wordt een reekswaarde voor pakketverzameling aangegeven (de standaardinstelling is NULLID) om het gebruik van gedeelde pakketten in te schakelen die nodig zijn om SQL-instructies te verwerken. Dit is van toepassing op Implementation = Microsoft.</li><li><code>UseDb2ConnectGateway</code> : Hiermee wordt aangegeven of de verbinding wordt gemaakt via een Db2 Connect-gateway. Is van toepassing op implementation = &quot;Microsoft&quot;.</li></ul>    De recordparameter wordt bijvoorbeeld opgegeven als [option1 = value1, option2 = value2...] of [Query = "select ..."].    



## Category
Accessing data
