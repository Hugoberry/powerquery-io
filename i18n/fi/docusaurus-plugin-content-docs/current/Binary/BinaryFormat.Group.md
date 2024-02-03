---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Palauttaa binaarimuodon, joka lukee kohteiden ryhmän.


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

Parametrit ovat seuraavat:<ul><li>Parametri <code>binaryFormat</code> määrittää avaimen arvon binaarimuodon.</li><li>Parametri <code>group</code> antaa tietoja ryhmästä tunnettuja kohteita.</li><li>Valinnaista parametria <code>extra</code> voidaan käyttää määrittämään funktio, joka palauttaa binaarimuotoarvon odottamattomia avaimia seuraaville arvoille. Jos parametria <code>extra</code> ei määritetä, ilmenee virhe, jos odottamattomia avainten arvoja on olemassa.</li></ul>Parametri <code>group</code> määrittää kohdemääritysten luettelon. Kukin kohdemääritys on luettelo, joka sisältää 3–5 arvoa seuraavasti:<ul><li>Avaimen arvo. Kohdetta vastaavan avaimen arvo. Tämän on oltava yksilöivä kohteiden joukon sisällä.</li><li>Kohteen muoto. Kohteen arvoa vastaava binaarimuoto. Tämä mahdollistaa sen, että kullakin kohteella voi olla eri muoto. </li><li>Kohteen esiintyminen. <code>BinaryOccurrence.Type</code>-arvo sille, montako kertaa kohteen odotetaan esiintyvän ryhmässä. Vaaditut kohteet, joita ei ole, aiheuttavat virheen. Vaaditut tai valinnaiset kohteiden kaksoiskappaleita käsitellään samoin kuin odottamattomia avainten arvoja.</li><li>Oletuskohdearvo (valinnainen). Jos oletuskohdearvo on kohdemääritysluettelossa, eikä se ole tyhjäarvo, sitä käytetään oletusarvon sijaan. Toistuvien tai valinnaisten kohteiden oletusarvo on tyhjäarvo, ja toistuvien arvojen oletusarvo on tyhjä luettelo \{ }.</li><li>Kohteen arvon muunnos (valinnainen). Jos kohteen arvon muunnosfunktio on kohdemääritysluettelossa, eikä se ole tyhjäarvo, sitä kutsutaan muuntamaan kohteen arvo, ennen kuin se palautetaan. Muunnosfunktiota kutsutaan vain, jos kohde näkyy syötteessä (sitä ei koskaan kutsuta käyttäen oletusarvoa). </li></ul>


## Examples

### Example #1 
Seuraavassa oletetaan avaimen arvo, joka on yksittäinen tavu, ja ryhmässä neljä odotettua kohdetta, joista kaikilla on tavu tietoja avaimen jälkeen.  Kohteet näkyvät syötteessä seuraavasti:&lt;ul&gt;&lt;li&gt;Avain 1 vaaditaan, ja se on olemassa käyttäen arvoa 11.&lt;/li&gt;&lt;li&gt;Avain 2 toistetaan ja on olemassa kahdesti käyttäen arvoa 22. Tämän tuloksena on arvo \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Avain 3 on valinnainen ja olemassa. Tämän tuloksena oleva arvo on tyhjäarvo.&lt;/li&gt;&lt;li&gt;Avain 4 toistetaan, mutta se on olemassa. Tämän tuloksena oleva arvo on \{ }.&lt;/li&gt;&lt;li&gt;Avain 5 ei ole osa ryhmää, mutta se on olemassa kerran käyttäen arvoa 55.  Lisäfunktiota kutsutaan käyttäen avaimen arvoa 5, ja se palauttaa kyseistä arvoa vastaavan muodon (BinaryFormat.Byte).  Arvo 55 luetaan ja hylätään.&lt;/li&gt;&lt;/ul&gt;
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
Seuraava esimerkki havainnollistaa kohteen arvon muunnoksen ja oletuskohdearvon.   Toistuva kohde, jolla on avain 1, laskee luettujen arvojen summan käyttäen kohdetta List.Sum.  Valinnaisella kohteella, jolla on arvo 2, on oletusarvo 123 tyhjäarvon sijaan.
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
