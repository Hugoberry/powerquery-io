---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Vráti binárny formát, ktorý prečíta skupinu položiek.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

Parametre sú takéto:<ul><li>Parameter <code>binaryFormat</code> zadá binárny formát hodnoty kľúča.</li><li>Parameter <code>group</code> poskytne informácie o skupine známych položiek.</li><li>Voliteľný parameter <code>extra</code> možno použiť na zadanie funkcie, ktorá vráti hodnotu binárneho formátu pre hodnotu za každým neočakávaným kľúčom. Ak parameter <code>extra</code> nie je zadaný, potom v prípade výskytu neočakávaných hodnôt kľúča dôjde k chybe.</li></ul>Parameter <code>group</code> zadáva zoznam definícií položiek. Každá definícia položky je zoznam obsahujúci 3 – 5 hodnôt takto:<ul><li>Hodnota kľúča. Hodnota kľúča, ktorý zodpovedá položke. Musí byť jedinečná v rámci množiny položiek.</li><li>Formát položky. Binárny formát zodpovedajúci hodnote položky. Takto môže mať každá položka iný formát. </li><li>Výskyt položky. Hodnota <code>BinaryOccurrence.Type</code> predstavujúca počet očakávaných výskytov položky v skupine. Požadované položky, ktoré nie sú prítomné, spôsobia chybu. Požadované alebo voliteľné duplicitné položky sa spracujú rovnako ako neočakávané hodnoty kľúča.</li><li>Predvolená hodnota položky (voliteľné). Ak sa predvolená hodnota položky vyskytne v zozname definícií položiek a nemá hodnotu null, použije sa namiesto predvolenej hodnoty. Predvolená hodnota pre opakujúce sa alebo voliteľné položky je null a predvolená hodnota pre opakujúce sa hodnoty je prázdny zoznam \{ }.</li><li>Transformácia hodnoty položky (voliteľné). Ak je funkcia transformácie hodnoty položky prítomná v zozname definícií položiek a nemá hodnotu null, potom bude vyvolaná na transformáciu hodnoty položky ešte pred jej návratom. Funkcia transformácie sa vyvolá iba v prípade, keď sa položka vyskytne vo vstupe (nikdy sa nevyvolá s predvolenou hodnotou). </li></ul>


## Examples

### Example #1 
Podľa nasledujúcich informácií sa hodnota považuje za hodnotu kľúča, keď ide o jeden bajt, so 4 očakávanými položkami v skupine, pričom všetky majú za kľúčom bajt údajov.  Položky sa vyskytujú vo vstupe takto:&lt;ul&gt;&lt;li&gt;Vyžaduje sa kľúč 1 a vyskytuje sa s hodnotou 11.&lt;/li&gt;&lt;li&gt;Kľúč 2 sa opakuje a vyskytuje sa dvakrát s hodnotou 22, pričom výsledkom je hodnota \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Kľúč 3 je voliteľný a nevyskytuje sa, pričom výsledkom je hodnota null.&lt;/li&gt;&lt;li&gt;Kľúč 4 sa opakuje, no nevyskytuje sa, pričom výsledkom je hodnota \{ }.&lt;/li&gt;&lt;li&gt;Kľúč 5 nie je súčasťou skupiny, no vyskytuje sa raz s hodnotou 55.  Mimoriadna funkcia sa vyvolá s hodnotou kľúča 5 a vráti formát zodpovedajúci tejto hodnote (BinaryFormat.Byte).  Hodnota 55 sa prečíta a zahodí.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
Nasledujúci príklad ilustruje transformáciu hodnoty položky a predvolenú hodnotu položky.   Opakujúca sa hodnota s kľúčom 1 sčíta zoznam hodnôt prečítaných pomocou funkcie List.Sum.  Voliteľná položka s kľúčom 2 má namiesto hodnoty null predvolenú hodnotu 123.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
