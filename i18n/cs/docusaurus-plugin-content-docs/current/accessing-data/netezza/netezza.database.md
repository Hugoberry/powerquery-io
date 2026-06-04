---
title: Netezza.Database
---

# Netezza.Database


Importuje data z databáze IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku se seznamem zobrazení, tabulek a uložených funkcí Netezza z databáze Netezza Server `database` na serveru `server`. U serveru se může volitelně zadat i port oddělený dvojtečkou. Může se zadat volitelný parametr záznamu `options`, který bude řídit následující možnosti:

-   `CreateNavigationProperties`: Logická hodnota (true/false), která nastavuje, jestli se mají generovat navigační vlastnosti pro vrácené hodnoty (výchozí nastavení true)
-   `HierarchicalNavigation`: Logická hodnota (true/false), která nastavuje, jestli se tabulky mají zobrazovat seskupené podle svých názvů schémat (výchozí nastavení false)
-   `ConnectionTimeout`: Jak dlouho se má čekat, než se ukončí pokus o připojení k serveru. Výchozí hodnota je závislá na ovladači.
-   `CommandTimeout`: Jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota je závislá na ovladači.
-   `NormalizeDatabaseName`: Logická hodnota (true/false), která nastavuje, jestli se má název databáze normalizovat na všechna velká písmena nebo se má interpretovat doslovně (výchozí nastavení je true).

Parametr záznamu se zadává ve formátu \[možnost1 = hodnota1, možnost2 = hodnota2...\].


## Examples

### Example #1
Výpis tabulek v projektu IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



