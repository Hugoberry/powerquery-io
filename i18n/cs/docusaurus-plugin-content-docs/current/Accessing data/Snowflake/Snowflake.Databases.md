---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Naimportuje data ze skladu Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Vrátí zápis tabulek ve <code>skladu</code> Snowflake Computing umístěném na <code>serveru</code>. Může se zadat nepovinný parametr záznamu, <code>možnosti</code>, který řídí následující možnosti:<ul><li><code>Role</code>: Textová hodnota, která se použije jako název role připojení.</li><li><code>CreateNavigationProperties</code>: Logická hodnota (pravda/nepravda), která nastavuje, jestli generovat navigační vlastnosti pro vrácené hodnoty (výchozí hodnota je pravda)</li><li><code>ConnectionTimeout</code>: Počet sekund čekání na síťové odezvy ze Snowflake.</li><li><code>CommandTimeout</code>: Počet sekund čekání na provedení dotazu.</li></ul>    


## Examples

### Example #1 
Vypíše tabulky ve skladu Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



