---
title: Sql.Database
---

# Sql.Database


Vrátí tabulku tabulek, zobrazení a uložených funkcí SQL z databáze systému SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku tabulek, zobrazení a uložených funkcí SQL z databáze systému SQL Server `database` na serveru `server`. Společně se serverem se volitelně může zadat port oddělený dvojtečkou nebo čárkou. Zadáním volitelného parametru záznamu `options` můžete řídit následující možnosti:

-   `Query` : Nativní dotaz SQL použitý k načtení dat. Pokud dotaz vyprodukuje více sad výsledků, bude vrácena jenom první.
-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je true).
-   `NavigationPropertyNameGenerator` : Funkce používaná ke generování názvů navigačních vlastností.
-   `MaxDegreeOfParallelism` : Číslo, které určuje hodnotu klauzule dotazu maxdop v generovaném dotazu SQL.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota závisí na ovladači.
-   `HierarchicalNavigation` : Logický parametr (true/false), který nastavuje, jestli se mají tabulky zobrazit seskupené podle svých názvů schémat (výchozí hodnota je false).
-   `MultiSubnetFailover` : Logický parametr (true/false), který nastavuje hodnotu vlastnosti MultiSubnetFailover v připojovacím řetězci (výchozí hodnota je false).
-   `UnsafeTypeConversions` : Logická hodnota (true/false), která se při hodnotě true pokusí posunout převody typů, které by mohly selhat a způsobit selhání celého dotazu. Nedoporučuje se pro obecné použití.
-   `ContextInfo` : Binární hodnota, která se používá k nastavení CONTEXT\_INFO před spuštěním jednotlivých příkazů
-   `OmitSRID` : Logická hodnota (true/false), která při hodnotě true při vytváření Well-Known Text z geometrických a geografických typů vynechá SRID.
-   `EnableCrossDatabaseFolding` : Logická hodnota (true/false), která v případě hodnoty true povoluje posouvání dotazů mezi databázemi na stejném serveru. Výchozí hodnota je false.

Parametr záznamu se zadává například jako \[možnost1 = hodnota1, možnost2 = hodnota2...\] nebo \[Query = "select ..."\].



## Category
Accessing data
