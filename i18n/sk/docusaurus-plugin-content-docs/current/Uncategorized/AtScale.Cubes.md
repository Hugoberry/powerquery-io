---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Importovať údaje kocky /DirectQuery z funkcie AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Vráti údaje kocky z funkcie AtScale na serveri <code>server</code>. Môže sa zadať voliteľný parameter záznamu, <code>options</code>, pomocou ktorého sa dajú ovládať nasledujúce možnosti:<ul>        <li><code>TypedMeasureColumns</code>: Logická hodnota, ktorá udáva, či sa typy zadané v multidimenzionálnom alebo tabuľkovom modeli použijú pre typy stĺpcov pridaných mierok. Keď sú nastavené na hodnotu false, pre všetky stĺpce mierok sa použije typ number. Predvolenou hodnotou pre túto možnosť je false.</li>        <li><code>CommandTimeout</code>: Trvanie (v sekundách), ktoré ovláda, ako dlho môže byť spustený dotaz na strane servera pred tým, ako to bude zrušený. Predvolená hodnota závisí od ovládača.</li>        <li><code>ConnectionTimeout</code>: Trvanie (v sekundách), ktoré ovláda, ako dlho treba čakať pred tým, ako sa zruší pokus o pripojenie na server. Predvolená hodnota závisí od ovládača. </li></ul>Parameter záznamu je zadaný vo formáte [option1 = value1, option2 = value2...].


