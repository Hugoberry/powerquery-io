---
title: SapHana.Database
---

# SapHana.Database


## Description

Vráti balíky v databáze SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku viacrozmerných balíkov z databázy SAP HANA <code>server</code>. Voliteľný parameter záznamu <code>options</code> možno určiť na ovládanie týchto možností:    <ul><li><code>Query</code> : Nat&#237;vny dotaz SQL sl&#250;žiaci na nač&#237;tanie &#250;dajov. Ak s&#250; v&#253;sledkom dotazu viacer&#233; množiny v&#253;sledkov, vr&#225;ti sa iba prv&#225;.</li><li><code>Distribution</code> : Možnosť distrib&#250;cie pre SAP HANA určuj&#250;ca hodnotu vlastnosti Distrib&#250;cia v reťazci pripojenia. Smerovanie pr&#237;kazu je met&#243;da určenia spr&#225;vneho serverov&#233;ho uzla distribuovan&#233;ho syst&#233;mu pred vykonan&#237;m pr&#237;kazu. Predvolen&#225; hodnota je SapHanaDistribution.All.</li><li><code>Implementation</code> : Určuje implement&#225;ciu konektora SAP HANA, ktor&#253; sa m&#225; použ&#237;vať.</li><li><code>EnableColumnBinding</code> : Pri nač&#237;tavan&#237; &#250;dajov naviaže premenn&#233; na stĺpce množiny v&#253;sledkov SAP Hana. M&#244;že potenci&#225;lne zlepšiť v&#253;kon za cenu mierne vyššieho využitia pam&#228;te. Predvolen&#225; hodnota je false.</li><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota je 15 sek&#250;nd.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li></ul>    



## Category
Accessing data
