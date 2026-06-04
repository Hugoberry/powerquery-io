---
title: Lines.FromText
---

# Lines.FromText


Muuntaa tekstiarvon luetteloksi tekstiarvoja, jotka on jaettu osiin rivinvaihtojen kohdalla. Jos includeLineSeparators-arvo on true, rivinvaihtomerkit sisältyvät tekstiin.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Muuntaa tekstiarvon rivinvaihdoissa jaetuksi tekstiarvojen luetteloksi.

-   `text`: Tekstiarvo, joka muunnetaan tekstiarvojen luetteloksi.
-   `quoteStyle`: Määrittää, miten rivinvaihdot käsitellään. Kohteen `quoteStyle` arvo voi olla `tyhjäarvoinen`. Oletusarvo on `QuoteStyle.None`.
-   `includeLineSeparators`: Määrittää, sisällytetäänkö rivinvaihtomerkit tekstiin. Kohteen `includeLineSeparators` arvo voi olla `tyhjäarvoinen`. Oletusarvo on `epätosi`.

Jos tietue on määritetty kohteelle `quoteStyle` (ja `includeLineSeparators` on `tyhjäarvoinen`), seuraavat tietuekentät voidaan antaa:

-   `QuoteStyle`: määrittää, miten lainausmerkeissä olevia rivinvaihtoja käsitellään.
    -   `QuoteStyle.Csv`: Lainattuja rivinvaihtoja käsitellään osana tietoja, ei nykyisen rivin lopussa.
    -   `QuoteStyle.None`: kaikki rivinvaihdot käsitellään nykyisen rivin lopussa, vaikka ne olisivat lainausmerkeissä olevan arvon sisällä. Tämä arvo on oletusarvo, jos `CsvStyle`\-asetusta ei ole määritetty.
-   `CsvStyle`: tämä määrittää, miten lainausmerkkejä käsitellään. Ei saa käyttää `QuoteStyle.None`\-määrityksen kanssa.
    -   `CsvStyle.QuoteAfterDelimiter`: Kentän lainausmerkit ovat merkitseviä heti `erottimen` jälkeen.
    -   `CsvStyle.QuoteAlways`: kentässä olevat lainausmerkit ovat merkitseviä riippumatta niiden sijainnista.
-   `Erotin`: yksimerkkinen erotin. Tulee käyttää vain `CsvStyle.QuoteAfterDelimiter`\-määritteen kanssa.
-   `IncludeLineSeparators`: Määrittää, sisällytetäänkö rivinvaihtomerkit tekstiin. Oletusarvo on `epätosi`.



## Category
Lines
