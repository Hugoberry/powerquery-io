---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Vrací objekty z účtu Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Vrací objekty v účtu Salesforce poskytnutém v přihlašovacích údajích. Účet se připojí přes zadané prostředí <code>loginUrl</code>. Pokud jste žádné prostředí nezadali, připojí se účet k produkčnímu prostředí (https://login.salesforce.com). Pomocí nepovinného parametru záznamu <code>options</code> můžete zadat další vlastnosti. Záznam může obsahovat následující pole:    <ul><li><code>CreateNavigationProperties</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; u vr&#225;cen&#253;ch hodnot generovat navigačn&#237; vlastnosti (v&#253;choz&#237; hodnota je false).</li><li><code>ApiVersion</code> : Verze rozhran&#237; Salesforce API, kter&#225; se m&#225; pro tento dotaz použ&#237;t. Pokud nen&#237; zad&#225;no, použije se API verze 29.0.</li><li><code>Timeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se ž&#225;dost serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na zdroji.</li></ul>    



## Category
Accessing data