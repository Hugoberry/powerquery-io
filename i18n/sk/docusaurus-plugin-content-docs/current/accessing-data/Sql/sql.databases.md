---
title: Sql.Databases
---

# Sql.Databases


Vráti tabuľku databáz na serveri SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku databáz na stanovenom SQL Serveri `server`. Voliteľný parameter záznamu, `options`, je možné zadať na ovládanie nasledujúcich možností:

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

Parameter záznamu je zadaný vo forme \[option1 = value1, option2 = value2...\], napríklad.  
  
Nepodporuje nastavenie dotazu SQL, ktorý sa má spustiť na serveri. Namiesto toho sa má na spustenie dotazu SQL použiť `Sql.Database`.



## Category
Accessing data
