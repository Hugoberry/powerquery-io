---
title: PostgreSQL.Database
---

# PostgreSQL.Database


## Description

Vráti tabuľku tabuliek a zobrazení SQL dostupných v databáze PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku SQL tabuliek a zobrazení dostupných v databáze PostgreSQL na serveri <code>server</code> v rámci inštancie databázy s názvom <code>database</code>. Port je možné voliteľne zadať spolu so serverom, pričom port musí byť oddelený dvojbodkou. Možno zadať voliteľný parameter záznamu, <code>options</code>, na nastavenie nasledujúcich možností:    <ul><li><code>CreateNavigationProperties</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; generovať vlastnosti navig&#225;cie v pr&#237;pade vr&#225;ten&#253;ch hodn&#244;t (predvolen&#225; hodnota je True).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcia, ktor&#225; sa použ&#237;va na tvorbu n&#225;zvov vlastnost&#237; navig&#225;cie.</li><li><code>Query</code> : Nat&#237;vny dotaz SQL sl&#250;žiaci na nač&#237;tanie &#250;dajov. Ak s&#250; v&#253;sledkom dotazu viacer&#233; množiny v&#253;sledkov, vr&#225;ti sa iba prv&#225;.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota z&#225;vis&#237; od ovl&#225;dača.</li><li><code>HierarchicalNavigation</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; zobraziť tabuľky zoskupen&#233; podľa n&#225;zvov sch&#233;my (predvolen&#225; hodnota je False).</li></ul>    Parameter záznamu sa zadáva napríklad ako [option1 = value1, option2 = value2...] alebo [Query = "select ..."].    



## Category
Accessing data
