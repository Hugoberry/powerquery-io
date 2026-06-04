---
title: SharePoint.Files
---

# SharePoint.Files


Vrátí tabulku obsahující dokumenty z webu SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku obsahující řádek pro každý dokument nalezený na zadaném sharepointovém webu `url` a v jeho podsložkách. Každý řádek obsahuje vlastnosti složky nebo souboru a odkaz na jejich obsah. Zadáním `options` se dají řídit následující možnosti:

-   `ApiVersion` : Číslo (14 nebo 15) nebo text „Auto“, který určuje verzi rozhraní API SharePointu, která se má pro tento web používat. Když se tato možnost nezadá, použije se rozhraní API ve verzi 14. Při zadání možnosti Auto se automaticky zjistí verze serveru, a když to není možné, nastaví se výchozí verze 14. Weby SharePointu jiné než anglické vyžadují aspoň verzi 15.



## Category
Accessing data
