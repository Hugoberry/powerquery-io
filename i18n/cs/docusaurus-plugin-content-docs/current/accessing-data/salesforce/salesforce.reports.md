---
title: Salesforce.Reports
---

# Salesforce.Reports


Vrací sestavy z účtu Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Vrací sestavy v účtu Salesforce poskytnutém v přihlašovacích údajích. Účet se připojí přes zadané prostředí `loginUrl`. Pokud jste žádné prostředí nezadali, připojí se účet k produkčnímu prostředí (https://login.salesforce.com). Pomocí nepovinného parametru záznamu `options` můžete zadat další vlastnosti. Záznam může obsahovat následující pole:

-   `ApiVersion` : Verze rozhraní Salesforce API, která se má pro tento dotaz použít. Pokud není zadáno, použije se API verze 29.0.
-   `Timeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se žádost serveru opustí. Výchozí hodnota závisí na zdroji.



## Category
Accessing data
