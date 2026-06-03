---
title: Odbc.DataSource
---

# Odbc.DataSource


Retourneert een tabel met SQL-tabellen en -weergaven uit de ODBC-gegevensbron.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met SQL-tabellen en -weergaven geretourneerd uit de ODBC-gegevensbron die is opgegeven met de verbindingsreeks `connectionString`. `connectionString` kan tekst of een record met eigenschapswaardeparen zijn. Eigenschapswaarden kunnen tekst of cijfers zijn. Een optionele recordparameter, `options`, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `CreateNavigationProperties` : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is true).
-   `HierarchicalNavigation` : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).
-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is vijftien seconden.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.
-   `SqlCompatibleWindowsAuth` : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.


## Examples

### Example #1
Retourneert de SQL-tabellen en weergaven van de opgegeven verbindingsreeks.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
