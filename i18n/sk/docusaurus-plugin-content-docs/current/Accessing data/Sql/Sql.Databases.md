---
title: Sql.Databases
---

# Sql.Databases


## Description

Vráti tabuľku databáz na serveri SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku databáz na stanovenom SQL Serveri <code>server</code>. Voliteľný parameter záznamu <code>options</code> je možné zadať na ovládanie nasledujúcich možností:    <ul><li><code>CreateNavigationProperties</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; generovať vlastnosti navig&#225;cie v pr&#237;pade vr&#225;ten&#253;ch hodn&#244;t (predvolen&#225; hodnota je True).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcia, ktor&#225; sa použ&#237;va na tvorbu n&#225;zvov vlastnost&#237; navig&#225;cie.</li><li><code>MaxDegreeOfParallelism</code> : Č&#237;slo, ktor&#233; nastavuje hodnotu klauzuly dotazu maxdop v generovanom dotaze SQL.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota z&#225;vis&#237; od ovl&#225;dača.</li><li><code>HierarchicalNavigation</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; zobraziť tabuľky zoskupen&#233; podľa n&#225;zvov sch&#233;my (predvolen&#225; hodnota je False).</li><li><code>MultiSubnetFailover</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje hodnotu vlastnosti MultiSubnetFailover v reťazci pripojenia (predvolen&#225; hodnota je False).</li><li><code>UnsafeTypeConversions</code> : Logick&#225; hodnota (true/false), ktor&#225; sp&#244;sob&#237;, že v pr&#237;pade nadobudnutia hodnoty true d&#244;jde k pokusu o posunutie konverzie typu, ktor&#253; m&#244;že zlyhať a sp&#244;sobiť zlyhanie cel&#233;ho dotazu. Neodpor&#250;ča sa na všeobecn&#233; použitie.</li><li><code>ContextInfo</code> : Bin&#225;rna hodnota, ktor&#225; sa použ&#237;va na nastavenie možnosti CONTEXT_INFO pred spusten&#237;m každ&#233;ho pr&#237;kazu.</li><li><code>OmitSRID</code> : Logick&#225; hodnota (true/false), ktor&#225; v pr&#237;pade true vynech&#225; identifik&#225;tor SRID, keď sa z geometrick&#253;ch a geografick&#253;ch typov &#250;dajov vytv&#225;ra Well-Known Text.</li><li><code>EnableCrossDatabaseFolding</code> : Logick&#225; hodnota (true/false), ktor&#225; v pr&#237;pade hodnoty true umožňuje postupn&#233; pos&#250;vanie dotazov naprieč datab&#225;zami na rovnakom serveri. Predvolen&#225; hodnota je false.</li></ul>    Parameter záznamu sa zadáva napríklad ako [option1 = value1, option2 = value2...].    <br />    Nepodporuje nastavenie dotazu SQL na spúšťanie na serveri. Na spustenie dotazu SQL by sa namiesto toho mala použiť funkcia <code>Sql.Database</code>.    



## Category
Accessing data
