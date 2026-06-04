---
title: SharePoint.Contents
---

# SharePoint.Contents


Vrátí tabulku s obsahem webu SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku obsahující řádek pro každou složku a dokument nalezené na zadaném sharepointovém webu `url`. Každý řádek obsahuje vlastnosti složky nebo souboru a odkaz na jejich obsah. Zadáním `options` se dají řídit následující možnosti:

-   `ApiVersion` : Číslo (14 nebo 15) nebo text „Auto“, který určuje verzi rozhraní API SharePointu, která se má pro tento web používat. Když se tato možnost nezadá, použije se rozhraní API ve verzi 14. Při zadání možnosti Auto se automaticky zjistí verze serveru, a když to není možné, nastaví se výchozí verze 14. Weby SharePointu jiné než anglické vyžadují aspoň verzi 15.
-   `Implementation` : Volitelné. Určuje, která verze konektoru SharePointu se má použít. Přípustné hodnoty jsou 2.0 nebo null. Pokud je hodnota 2.0, použije se implementace 2.0 konektoru SharePointu. Pokud je hodnota null, použije se původní implementace konektoru SharePointu.



## Category
Accessing data
