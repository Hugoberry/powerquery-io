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

Hiermee wordt een tabel met databases op de opgegeven SQL-server <code>server</code> geretourneerd. U kunt optioneel de recordparameter <code>options</code> opgeven om de volgende opties te bepalen:    <ul><li><code>CreateNavigationProperties</code> : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).</li><li><code>NavigationPropertyNameGenerator</code> : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.</li><li><code>MaxDegreeOfParallelism</code> : Een getal waarmee de waarde van de querycomponent maxdop in de gegenereerde SQL-query wordt ingesteld.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>HierarchicalNavigation</code> : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).</li><li><code>MultiSubnetFailover</code> : Een logische waarde (true/false) waarmee de waarde van de eigenschap MultiSubnetFailover in de verbindingsreeks wordt ingesteld (de standaardinstelling is false).</li><li><code>UnsafeTypeConversions</code> : Een logische waarde (waar/onwaar) waarbij indien waar, een poging tot invouwen van typeconversies wordt gedaan die kan mislukken en waardoor de volledige query mislukt. Niet aanbevolen voor algemeen gebruik.</li><li><code>ContextInfo</code> : Een binaire waarde die wordt gebruikt om de CONTEXT_INFO in te stellen voordat elke opdracht wordt uitgevoerd.</li><li><code>OmitSRID</code> : Een logische waarde (waar/onwaar) waarbij indien waar, de SRID wordt weggelaten bij het produceren van de WKT-weergave (Well-Known Text) van geometrie- en geografietypen.</li><li><code>EnableCrossDatabaseFolding</code> : Een logische waarde (waar/onwaar) die, indien waar, het vouwen van query&#39;s toestaat voor databases op dezelfde server. De standaardwaarde is onwaar.</li></ul>    De recordparameter wordt bijvoorbeeld opgegeven als [option1 = value1, option2 = value2...].    <br />    Ondersteunt geen instelling van een SQL-query voor uitvoering op de server. <code>Sql.Database</code> moet worden gebruikt om een SQL-query uit te voeren.    



## Category
Accessing data
