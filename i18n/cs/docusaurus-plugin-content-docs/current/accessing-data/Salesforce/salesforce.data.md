---
title: Salesforce.Data
---

# Salesforce.Data


Vrací objekty z účtu Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Vrací objekty v účtu Salesforce poskytnutém v přihlašovacích údajích. Účet se připojí přes zadané prostředí `loginUrl`. Pokud jste žádné prostředí nezadali, připojí se účet k produkčnímu prostředí (https://login.salesforce.com). Pomocí nepovinného parametru záznamu `options` můžete zadat další vlastnosti. Záznam může obsahovat následující pole:

-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je false).
-   `ApiVersion` : Verze rozhraní Salesforce API, která se má pro tento dotaz použít. Pokud není zadáno, použije se API verze 29.0.
-   `Timeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se žádost serveru opustí. Výchozí hodnota závisí na zdroji.



## Category
Accessing data
