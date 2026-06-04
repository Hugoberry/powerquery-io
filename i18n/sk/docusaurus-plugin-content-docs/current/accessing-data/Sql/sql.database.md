---
title: Sql.Database
---

# Sql.Database


Vráti tabuľku tabuliek, zobrazení a uložených funkcií SQL z databázy servera SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku SQL tabuliek, zobrazení a uložených funkcií z databázy SQL Servera `database` na serveri `server`. Port je možné voliteľne zadať spolu so serverom, pričom port musí byť oddelený dvojbodkou alebo čiarkou. Voliteľný parameter záznamu, `options`, je možné zadať na ovládanie nasledujúcich možností:

-   `Query` : Natívny dotaz SQL slúžiaci na načítanie údajov. Ak sú výsledkom dotazu viaceré množiny výsledkov, vráti sa iba prvá.
-   `CreateNavigationProperties` : Logická hodnota (True/False), ktorá nastavuje, či sa majú generovať vlastnosti navigácie v prípade vrátených hodnôt (predvolená hodnota je True).
-   `NavigationPropertyNameGenerator` : Funkcia, ktorá sa používa na tvorbu názvov vlastností navigácie.
-   `MaxDegreeOfParallelism` : Číslo, ktoré nastavuje hodnotu klauzuly dotazu maxdop v generovanom dotaze SQL.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `HierarchicalNavigation` : Logická hodnota (True/False), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je False).
-   `MultiSubnetFailover` : Logická hodnota (True/False), ktorá nastavuje hodnotu vlastnosti MultiSubnetFailover v reťazci pripojenia (predvolená hodnota je False).
-   `UnsafeTypeConversions` : Logická hodnota (true/false), ktorá spôsobí, že v prípade nadobudnutia hodnoty true dôjde k pokusu o posunutie konverzie typu, ktorý môže zlyhať a spôsobiť zlyhanie celého dotazu. Neodporúča sa na všeobecné použitie.
-   `ContextInfo` : Binárna hodnota, ktorá sa používa na nastavenie možnosti CONTEXT\_INFO pred spustením každého príkazu.
-   `OmitSRID` : Logická hodnota (true/false), ktorá v prípade true vynechá identifikátor SRID, keď sa z geometrických a geografických typov údajov vytvára Well-Known Text.
-   `EnableCrossDatabaseFolding` : Logická hodnota (true/false), ktorá v prípade hodnoty true umožňuje postupné posúvanie dotazov naprieč databázami na rovnakom serveri. Predvolená hodnota je false.

Parameter záznamu sa zadáva napríklad ako \[možnosť1 = hodnota1, možnosť2 = hodnota2...\] alebo \[Dotaz = "select ..." \].



## Category
Accessing data
