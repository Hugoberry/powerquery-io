---
title: OleDb.DataSource
---

# OleDb.DataSource


Hiermee wordt een tabel met SQL-tabellen en -weergaven uit de OLE DB-gegevensbron geretourneerd.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met SQL-tabellen en -weergaven uit de OLE DB-gegevensbron geretourneerd die is opgegeven in de verbindingsreeks <code>connectionString</code>. <code>connectionString</code> kan tekst of een record met eigenschap-waardeparen zijn. Eigenschapswaarden kunnen tekst of cijfers zijn. Een optionele recordparameter, <code>options</code>, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>CreateNavigationProperties</code> : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).</li><li><code>NavigationPropertyNameGenerator</code> : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.</li><li><code>Query</code> : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.</li><li><code>HierarchicalNavigation</code> : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is true).</li><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.</li></ul>    De recordparameter wordt bijvoorbeeld opgegeven als [option1 = value1, option2 = value2...] of [Query = "select ..."].



## Category
Accessing data
