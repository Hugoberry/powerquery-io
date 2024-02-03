---
title: Netezza.Database
---

# Netezza.Database


## Description

Importuje data z databáze IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku se seznamem zobrazení, tabulek a uložených funkcí Netezza z databáze Netezza Server <code>database</code> na serveru <code>server</code>. U serveru se může volitelně zadat i port oddělený dvojtečkou. Může se zadat volitelný parametr záznamu <code>options</code>, který bude řídit následující možnosti:<ul>        <li><code>CreateNavigationProperties</code>: Logická hodnota (true/false), která nastavuje, jestli se mají generovat navigační vlastnosti pro vrácené hodnoty (výchozí nastavení true)</li>        <li><code>HierarchicalNavigation</code>: Logická hodnota (true/false), která nastavuje, jestli se tabulky mají zobrazovat seskupené podle svých názvů schémat (výchozí nastavení false)</li>        <li><code>ConnectionTimeout</code>: Jak dlouho se má čekat, než se ukončí pokus o připojení k serveru. Výchozí hodnota je závislá na ovladači.</li>        <li><code>CommandTimeout</code>: Jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota je závislá na ovladači.</li><li><code>NormalizeDatabaseName</code>: Logická hodnota (true/false), která nastavuje, jestli se má název databáze normalizovat na všechna velká písmena nebo se má interpretovat doslovně (výchozí nastavení je true).</li></ul>Parametr záznamu se zadává ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].


## Examples

### Example #1 
Výpis tabulek v projektu IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



