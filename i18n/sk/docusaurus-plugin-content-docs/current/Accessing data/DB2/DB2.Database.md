---
title: DB2.Database
---

# DB2.Database


## Description

Vráti tabuľku tabuliek a zobrazení SQL dostupných v databáze Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku tabuliek a zobrazení SQL dostupných v databáze Db2 na serveri <code>server</code> v rámci inštancie databázy s názvom <code>database</code>. Port je možné voliteľne zadať spolu so serverom, pričom port musí byť oddelený dvojbodkou. Možno zadať voliteľný parameter záznamu, <code>options</code>, na nastavenie nasledujúcich možností:    <ul><li><code>CreateNavigationProperties</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; generovať vlastnosti navig&#225;cie v pr&#237;pade vr&#225;ten&#253;ch hodn&#244;t (predvolen&#225; hodnota je True).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcia, ktor&#225; sa použ&#237;va na tvorbu n&#225;zvov vlastnost&#237; navig&#225;cie.</li><li><code>Query</code> : Nat&#237;vny dotaz SQL sl&#250;žiaci na nač&#237;tanie &#250;dajov. Ak s&#250; v&#253;sledkom dotazu viacer&#233; množiny v&#253;sledkov, vr&#225;ti sa iba prv&#225;.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota z&#225;vis&#237; od ovl&#225;dača.</li><li><code>HierarchicalNavigation</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; zobraziť tabuľky zoskupen&#233; podľa n&#225;zvov sch&#233;my (predvolen&#225; hodnota je False).</li><li><code>Implementation</code> : Určuje implement&#225;ciu intern&#233;ho poskytovateľa datab&#225;zy, ktor&#225; sa m&#225; použiť. Platn&#233; hodnoty s&#250;: &quot;IBM&quot; a &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Č&#237;slo identifik&#225;tora CCSID (Coded Character Set Identifier) na dek&#243;dovanie bin&#225;rnych &#250;dajov Db2 FOR BIT na znakov&#233; reťazce. Vzťahuje sa na implement&#225;ciu = &quot;Microsoft&quot;. Ak chcete zak&#225;zať konverziu, nastavte hodnotu 0 (predvolen&#233;). Ak chcete vykonať konverziu založen&#250; na k&#243;dovan&#237; datab&#225;zy, nastavte hodnotu 1. Ak chcete vykonať konverziu na k&#243;dovanie aplik&#225;cie, nastavte in&#233; č&#237;slo CCSID.</li><li><code>PackageCollection</code> : Určuje hodnotu reťazca pre kolekciu bal&#237;ka (predvolen&#225; hodnota je NULLID), ktor&#225; umožňuje použ&#237;vať zdieľan&#233; bal&#237;ky potrebn&#233; na spracovanie pr&#237;kazov SQL. Vzťahuje sa na hodnotu Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Určuje, či sa pripojenie vykon&#225;va cez br&#225;nu Db2 Connect. Vzťahuje sa na hodnotu Implementation = &quot;Microsoft&quot;.</li></ul>    Parameter záznamu sa zadáva napríklad ako [option1 = value1, option2 = value2...] alebo [Query = "select ..."].    



## Category
Accessing data
