---
title: Lines.FromBinary
---

# Lines.FromBinary


Muuntaa binaariarvon luetteloksi tekstiarvoja, jotka on jaettu osiin rivinvaihtojen kohdalla. Jos lainaustyyli määritetään, rivinvaihdot saattavat olla lainausmerkkien sisällä. Jos includeLineSeparators-arvo on true, rivinvaihtomerkit sisältyvät tekstiin.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Muuntaa binaariarvon tekstiarvojen luetteloksi, joka on jaettu rivinvaihtojen kohdilta.

-   `binary`: Luetteloon muunnettava binaariarvo.
-   `quoteStyle`: Määrittää, miten rivinvaihdot käsitellään. Kohteen `quoteStyle` arvo voi olla `tyhjäarvoinen`. Oletusarvo on `QuoteStyle.None`.
-   `includeLineSeparators`: Määrittää, sisällytetäänkö rivinvaihtomerkit tekstiin. Kohteen `includeLineSeparators` arvo voi olla `tyhjäarvoinen`. Oletusarvo on `epätosi`.
-   `encoding`: Määrittää binaariarvon tekstikoodauksen. Kohteen `encoding` arvo voi olla `tyhjäarvoinen`. Oletusarvo on `65001` (UTF-8).

Jos tietue on määritetty kohteelle `quoteStyle` (ja `includeLineSeparators` ja `encoding` ovat `tyhjäarvoisia`), seuraavat tietuekentät voidaan antaa:

-   `QuoteStyle`: määrittää, miten lainausmerkeissä olevia rivinvaihtoja käsitellään.
    -   `QuoteStyle.Csv`: Lainattuja rivinvaihtoja käsitellään osana tietoja, ei nykyisen rivin lopussa.
    -   `QuoteStyle.None`: kaikki rivinvaihdot käsitellään nykyisen rivin lopussa, vaikka ne olisivat lainausmerkeissä olevan arvon sisällä. Tämä arvo on oletusarvo, jos `CsvStyle`\-asetusta ei ole määritetty.
-   `CsvStyle`: tämä määrittää, miten lainausmerkkejä käsitellään. Ei saa käyttää `QuoteStyle.None`\-määrityksen kanssa.
    -   `CsvStyle.QuoteAfterDelimiter`: Kentän lainausmerkit ovat merkitseviä heti `erottimen` jälkeen.
    -   `CsvStyle.QuoteAlways`: kentässä olevat lainausmerkit ovat merkitseviä riippumatta niiden sijainnista.
-   `Erotin`: yksimerkkinen erotin. Tulee käyttää vain `CsvStyle.QuoteAfterDelimiter`\-määrityksen kanssa.
-   `IncludeLineSeparators`: Määrittää, sisällytetäänkö rivinvaihtomerkit tekstiin. Oletusarvo on `epätosi`.
-   `Koodaus`: Binaariarvon tekstikoodaus. Oletusarvo on `65001` (UTF-8).



## Category
Lines
