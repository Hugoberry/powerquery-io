---
title: MySQL.Database
---

# MySQL.Database


## Description

Vráti tabuľku tabuliek, zobrazení a uložených skalárnych funkcií SQL dostupných v databáze MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku SQL tabuliek, zobrazení a uložených skalárnych funkcií dostupných v databáze MySQL na serveri <code>server</code> v rámci inštancie databázy s názvom <code>database</code>. Port je možné voliteľne zadať spolu so serverom, pričom port musí byť oddelený dvojbodkou. Možno zadať voliteľný parameter záznamu, <code>options</code>, na ovládanie nasledujúcich možností:    <ul><li><code>Encoding</code> : Hodnota TextEncoding, ktor&#225; určuje množinu znakov použ&#237;van&#250; na k&#243;dovanie všetk&#253;ch dotazov odoslan&#253;ch na server (predvolen&#225; hodnota je null).</li><li><code>CreateNavigationProperties</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; generovať vlastnosti navig&#225;cie v pr&#237;pade vr&#225;ten&#253;ch hodn&#244;t (predvolen&#225; hodnota je True).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcia, ktor&#225; sa použ&#237;va na tvorbu n&#225;zvov vlastnost&#237; navig&#225;cie.</li><li><code>Query</code> : Nat&#237;vny dotaz SQL sl&#250;žiaci na nač&#237;tanie &#250;dajov. Ak s&#250; v&#253;sledkom dotazu viacer&#233; množiny v&#253;sledkov, vr&#225;ti sa iba prv&#225;.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota z&#225;vis&#237; od ovl&#225;dača.</li><li><code>TreatTinyAsBoolean</code> : Logick&#225; hodnota (True/False), ktor&#225; určuje, či sa musia vyn&#250;tiť stĺpce tinyint na serveri ako logick&#233; hodnoty. Predvolen&#225; hodnota je True.</li><li><code>OldGuids</code> : Logick&#225; hodnota (True/False), ktor&#225; určuje, či bud&#250; stĺpce char(36) (v pr&#237;pade hodnoty False) alebo binary(16) (v pr&#237;pade hodnoty True) sprac&#250;van&#233; ako identifik&#225;tory GUID. Predvolen&#233; nastavenie je False.</li><li><code>ReturnSingleDatabase</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; vr&#225;tiť všetky tabuľky všetk&#253;ch datab&#225;z (v pr&#237;pade hodnoty False) alebo sa maj&#250; vr&#225;tiť tabuľky a zobrazenia zadanej datab&#225;zy (v pr&#237;pade hodnoty True). Predvolen&#225; hodnota je False.</li><li><code>HierarchicalNavigation</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; zobraziť tabuľky zoskupen&#233; podľa n&#225;zvov sch&#233;my (predvolen&#225; hodnota je False).</li></ul>    Parameter záznamu sa zadáva napríklad ako [option1 = value1, option2 = value2...] alebo [Query = "select ..."].    



## Category
Accessing data
