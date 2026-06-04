---
title: Csv.Document
---

# Csv.Document


Palauttaa CSV-tiedoston sisällön taulukkona.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Palauttaa CSV-tiedoston sisällön taulukkona.

-   `columns` voi olla tyhjäarvoinen, sarakkeiden määrä, sarakenimien luettelo, taulukkotyyppi tai asetustietue.
-   `delimiter` voi olla yksittäinen merkki, merkkiluettelo tai arvo `""`, joka ilmaisee, että rivit tulee jakaa peräkkäisillä välilyönneillä. Oletus on `","`.
-   Tarkista kohdasta `ExtraValues.Type`, jos haluat nähdä tuetut arvot kohteelle `extraValues`.
-   `encoding` määrittää tekstin koodaustyypin.

Jos tietue on määritetty kohteelle `columns` (ja `delimiter`, `extraValues` sekä `encoding` ovat tyhjäarvoisia), seuraavat tietuekentät voidaan antaa:

-   `Delimiter`: tämä on yksimerkkinen sarake-erotin. Oletus on `","`.
-   `Columns`: Tämä voi olla tyhjäarvoinen, sarakkeiden määrä, sarakenimien luettelo tai taulukkotyyppi. Jos sarakkeiden määrä on pienempi kuin annettu luku, ylimääräiset sarakkeet ohitetaan. Jos sarakkeiden määrä on suurempi kuin annettu luku, lisäsarakkeet ovat tyhjäarvoisia. Kun tätä arvoa ei määritetä, sarakkeiden määrä määräytyy syötteen mukaan.
-   `Encoding`: tämä on tiedoston tekstikoodaus. Oletus on 65001 (UTF-8).
-   `CsvStyle`: tämä määrittää, miten lainausmerkkejä käsitellään.
    -   `CsvStyle.QuoteAfterDelimiter` (oletus): kentässä olevat lainausmerkit ovat merkitseviä vain suoraan erottimen jälkeen.
    -   `CsvStyle.QuoteAlways`: kentässä olevat lainausmerkit ovat merkitseviä riippumatta niiden sijainnista.
-   `QuoteStyle`: määrittää, miten lainausmerkeissä olevia rivinvaihtoja käsitellään.
    -   `QuoteStyle.Csv` (oletus): lainausmerkeissä olevia rivinvaihtoja käsitellään osana tietoja, ei nykyisen rivin lopussa.
    -   `QuoteStyle.None`: kaikki rivinvaihdot käsitellään nykyisen rivin lopussa, vaikka ne olisivat lainausmerkeissä olevan arvon sisällä.
-   `IncludeByteOrderMark`: looginen arvo, joka määrittää, sisällytetäänkö Byte Order Mark (BOM) CSV-tiedoston alkuun. Kun arvo on tosi, BOM kirjoitetaan (esimerkiksi UTF-8 BOM: `0xEF 0xBB 0xBF`); kun arvo on epätosi, BOM jätetään pois. Tämä vaihtoehto koskee vain tulostustilanteita. Oletusarvo on `false`.
-   `ExtraValues`: katso `ExtraValues.Type` tuettujen arvojen osalta kohteelle ExtraValues.


## Examples

### Example #1
Käsittele CSV-teksti, jossa on sarakeotsikoita.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
