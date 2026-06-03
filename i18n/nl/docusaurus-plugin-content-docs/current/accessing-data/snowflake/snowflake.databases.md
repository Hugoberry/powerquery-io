---
title: Snowflake.Databases
---

# Snowflake.Databases


Importeer gegevens uit een Snowflake Computing-warehouse.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Retourneert een tabel met de tabellen in het Snowflake Computing-`warehouse` dat zich bevindt op `server`. U kunt de optionele recordparameter `options` opgegeven om de volgende opties te besturen:

-   `Rol`: een tekstwaarde die kan worden gebruikt als de rolnaam van de verbinding.
-   `CreateNavigationProperties`: een logische waarde (true/false) waarmee wordt ingesteld of voor de geretourneerde waarden navigatie-eigenschappen moeten worden gegenereerd (standaardinstelling is true)
-   `ConnectionTimeout`: het aantal seconden dat moet worden gewacht op netwerkreacties van Snowflake.
-   `CommandTimeout`: het aantal seconden dat moet worden gewacht om een query uit te voeren.


## Examples

### Example #1
De tabellen in een Snowflake-warehouse weergeven.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



