---
title: SharePoint.Tables
---

# SharePoint.Tables


Vrátí tabulku s obsahem ze sharepointového seznamu.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku obsahující řádek pro každou položku seznamu nalezenou v zadaném sharepointovém seznamu `url`. Každý řádek obsahuje vlastnosti seznamu. Je možné zadat: `options` a řídit tak následující možnosti:

-   `ApiVersion` : Číslo (14 nebo 15) nebo text „Auto“, který určuje verzi rozhraní API SharePointu, která se má pro tento web používat. Když se tato možnost nezadá, použije se rozhraní API ve verzi 14. Při zadání možnosti Auto se automaticky zjistí verze serveru, a když to není možné, nastaví se výchozí verze 14. Weby SharePointu jiné než anglické vyžadují aspoň verzi 15.
-   `Implementation` : Volitelné. Určuje, která verze konektoru SharePointu se má použít. Přípustné hodnoty jsou 2.0 nebo null. Pokud je hodnota 2.0, použije se implementace 2.0 konektoru SharePointu. Pokud je hodnota null, použije se původní implementace konektoru SharePointu.
-   `ViewMode` : Volitelné. Tato možnost je platná jenom pro implementaci 2.0. Přípustné hodnoty jsou Vše a Výchozí. Pokud není zadána žádná hodnota, je hodnota nastavena na hodnotu Vše. Pokud je zadána možnost Vše, zobrazení zahrnuje všechny sloupce vytvořené uživatelem a systémem definované sloupce. Pokud je zadána možnost Výchozí, bude se zobrazení shodovat s tím, co uživatel uvidí při prohlížení seznamu online v libovolném zobrazení, které uživatel v nastavení nastavil jako Výchozí. Pokud uživatel upraví své výchozí zobrazení tak, aby přidal nebo odebral sloupce vytvořené uživatelem nebo definované systémem, nebo vytvořením nového zobrazení a jeho nastavením jako výchozího, budou tyto změny rozšířeny prostřednictvím konektoru.
-   `DisableAppendNoteColumns` : Zabrání konektoru v použití samostatného koncového bodu pro sloupce poznámek.



## Category
Accessing data
