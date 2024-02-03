---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Vráti tabuľku multidimenzionálnych kociek alebo tabuľkových modelov z databázy služby Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku multidimenzionálnych kociek alebo tabuľkových modelov z databázy služby Analysis Services <code>database</code> na serveri <code>server</code>. Môžete zadať voliteľný parameter záznamu <code>options</code>, ktorý bude ovládať nasledujúce možnosti:    <ul><li><code>Query</code> : Nat&#237;vny dotaz MDX sl&#250;žiaci na nač&#237;tanie &#250;dajov.</li><li><code>TypedMeasureColumns</code> : Logick&#225; hodnota určuj&#250;ca, či sa pre typy pridan&#253;ch stĺpcov s mierkami použij&#250; typy zadan&#233; v multidimenzion&#225;lnom alebo tabuľkovom modeli. Pri nastaven&#237; na hodnotu false sa pre všetky stĺpce s mierkami bude použ&#237;vať typ number. Predvolen&#225; hodnota nastaven&#225; pre t&#250;to možnosť je false.</li><li><code>Culture</code> : N&#225;zov kult&#250;ry určuj&#250;ci kult&#250;ru pre &#250;daje. Zodpoved&#225; to vlastnosti reťazca pripojenia Locale Identifier.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota z&#225;vis&#237; od ovl&#225;dača.</li><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota z&#225;vis&#237; od ovl&#225;dača.</li><li><code>SubQueries</code> : Č&#237;slo (0, 1 alebo 2) určuj&#250;ce hodnotu vlastnosti SubQueries v reťazci pripojenia. Riadi sa t&#253;m spr&#225;vanie vypoč&#237;tan&#253;ch členov pri podv&#253;beroch alebo podkock&#225;ch. (Predvolen&#225; hodnota je 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
