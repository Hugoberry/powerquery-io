---
title: Snowflake.Databases
---

# Snowflake.Databases


Naimportuje data ze skladu Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Vrátí zápis tabulek ve `skladu` Snowflake Computing umístěném na `serveru`. Může se zadat nepovinný parametr záznamu, `možnosti`, který řídí následující možnosti:

-   `Role`: Textová hodnota, která se použije jako název role připojení.
-   `CreateNavigationProperties`: Logická hodnota (pravda/nepravda), která nastavuje, jestli generovat navigační vlastnosti pro vrácené hodnoty (výchozí hodnota je pravda)
-   `ConnectionTimeout`: Počet sekund čekání na síťové odezvy ze Snowflake.
-   `CommandTimeout`: Počet sekund čekání na provedení dotazu.


## Examples

### Example #1
Vypíše tabulky ve skladu Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



