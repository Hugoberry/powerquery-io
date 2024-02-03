---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Importovat/DirectQuery dat datové krychle z AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Vrací data datové krychle z AtScale na serveru <code>server</code>. Může být zadán volitelný parametr záznamu <code>options</code> na řízení následujících možností:<ul>        <li><code>TypedMeasureColumns</code>: Logická hodnota, která určuje, jestli se typy zadané v multidimenzionálním nebo tabulkovém modelu použijí pro typy přidaných sloupců měr. Pokud je nastaveno na hodnotu false, pro všechny sloupce měr bude použit typ „number“. Výchozí hodnota pro tuto možnost je false.</li>        <li><code>CommandTimeout</code>: Délka (v sekundách), která určuje, jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota závisí na ovladači. </li>        <li><code>ConnectionTimeout</code>: Délka (v sekundách), která určuje, jak dlouho se má čekat, než bude ukončen pokus o připojení k serveru. Výchozí hodnota závisí na ovladači.</li></ul>Parametr záznamu se ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].


