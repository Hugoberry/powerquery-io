---
title: Netezza.Database
---

# Netezza.Database


Gegevens importeren uit een IBM Netezza-database.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met Netezza-tabellen, weergaven en opgeslagen functies van de Netezza Server-database <code>database</code> op server <code>server</code> geretourneerd. De poort kan optioneel worden opgegeven met de server, gescheiden door een dubbele punt. Een optionele recordparameter, <code>options</code>, kan worden opgegeven om de volgende opties te controleren:<ul>        <li><code>CreateNavigationProperties</code>: Een logische parameter (waar/onwaar) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op de geretourneerde waarden (standaardinstelling is waar)</li>        <li><code>HierarchicalNavigation</code>: Een logische parameter (waar/onwaar) waarmee wordt ingesteld of de tabellen moeten worden gegroepeerd op de schemanamen (standaardinstelling is onwaar)</li>        <li><code>ConnectionTimeout</code>: Een waarde voor de duur waarmee wordt bepaald hoe lang moet worden gewacht voor dat de pogingen om verbinding te maken met de server worden gestaakt. De standaardwaarde is afhankelijk van het stuurprogramma.</li>        <li><code>CommandTimeout</code>: Een waarde voor de duur waarmee wordt bepaald hoe lang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>NormalizeDatabaseName</code>: Een logische parameter (waar/onwaar) waarmee wordt ingesteld of de databasenaam wordt genormaliseerd naar hoofdletters of dat deze letterlijk wordt geïnterpreteerd (standaardinstelling is waar).</li></ul>De recordparameter wordt opgegeven als [option1 = value1, option2 = value2...].


## Examples

### Example #1 
De tabellen in een IBM Netezza-project weergeven.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



