---
title: Netezza.Database
---

# Netezza.Database


Import údajov z databázy IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku s tabuľkami, zobrazeniami a uloženými funkciami zo serverovej databázy Netezza `database` na serveri `server`. Voliteľne možno so serverom zadať port, ale musí byť oddelený dvojbodkou. Voliteľný parameter záznamu, `options`, možno určiť na ovládanie týchto možností:

-   `CreateNavigationProperties`: Logická hodnota (true/false), ktorá nastavuje, či sa majú na vrátených hodnotách generovať vlastnosti navigácie (predvolená hodnota je true)
-   `HierarchicalNavigation`: Logická hodnota (true/false), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je false)
-   `ConnectionTimeout`: Trvanie určujúce, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `CommandTimeout`: Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred jeho zrušením. Predvolená hodnota závisí od ovládača.
-   `NormalizeDatabaseName`: Logická hodnota (true/false), ktorá nastavuje, či sa má názov databázy normalizovať na veľké písmená alebo sa má interpretovať doslovne (predvolená hodnota je true).

Parameter záznamu sa zadáva napríklad ako \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Zoznam tabuliek v projekte IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



