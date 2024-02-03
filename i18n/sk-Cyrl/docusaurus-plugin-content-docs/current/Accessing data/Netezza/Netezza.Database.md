---
title: Netezza.Database
---

# Netezza.Database


## Description

Import údajov z databázy IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku s tabuľkami, zobrazeniami a uloženými funkciami zo serverovej databázy Netezza <code>database</code> na serveri <code>server</code>. Voliteľne možno so serverom zadať port, ale musí byť oddelený dvojbodkou. Voliteľný parameter záznamu, <code>options</code>, možno určiť na ovládanie týchto možností:<ul>        <li><code>CreateNavigationProperties</code>: Logická hodnota (true/false), ktorá nastavuje, či sa majú na vrátených hodnotách generovať vlastnosti navigácie (predvolená hodnota je true)</li>        <li><code>HierarchicalNavigation</code>: Logická hodnota (true/false), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je false)</li>        <li><code>ConnectionTimeout</code>: Trvanie určujúce, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.</li>        <li><code>CommandTimeout</code>: Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred jeho zrušením. Predvolená hodnota závisí od ovládača.</li><li><code>NormalizeDatabaseName</code>: Logická hodnota (true/false), ktorá nastavuje, či sa má názov databázy normalizovať na veľké písmená alebo sa má interpretovať doslovne (predvolená hodnota je true).</li></ul>Parameter záznamu sa zadáva napríklad ako [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Zoznam tabuliek v projekte IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



