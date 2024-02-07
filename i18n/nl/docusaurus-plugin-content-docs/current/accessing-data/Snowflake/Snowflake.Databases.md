---
title: Snowflake.Databases
---

# Snowflake.Databases


Importeer gegevens uit een Snowflake Computing-magazijn.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Retourneert een tabel met de tabellen in het Snowflake Computing-<code>warehouse</code> dat zich bevindt op <code>server</code>. U kunt de optionele recordparameter <code>options</code> opgegeven om de volgende opties te besturen:<ul><li><code>Rol</code>: een tekstwaarde die kan worden gebruikt als de rolnaam van de verbinding.</li><li><code>CreateNavigationProperties</code>: een logische waarde (true/false) waarmee wordt ingesteld of voor de geretourneerde waarden navigatie-eigenschappen moeten worden gegenereerd (standaardinstelling is true)</li><li><code>ConnectionTimeout</code>: het aantal seconden dat moet worden gewacht op netwerkreacties van Snowflake.</li><li><code>CommandTimeout</code>: het aantal seconden dat moet worden gewacht om een query uit te voeren.</li></ul>    


## Examples

### Example #1 
De tabellen in een Snowflake-magazijn weergeven.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



