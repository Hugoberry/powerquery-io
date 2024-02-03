---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Muuntaa binaariarvon luetteloksi tekstiarvoja, jotka on jaettu osiin rivinvaihtojen kohdalla.  Jos lainaustyyli määritetään, rivinvaihdot saattavat olla lainausmerkkien sisällä.  Jos includeLineSeparators-arvo on true, rivinvaihtomerkit sisältyvät tekstiin.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Muuntaa binaariarvon luetteloksi tekstiarvoja, jotka on jaettu osiin rivinvaihtojen kohdalla.  Jos lainaustyyli määritetään, rivinvaihdot saattavat olla lainausmerkkien sisällä.  Jos includeLineSeparators-arvo on true, rivinvaihtomerkit sisältyvät tekstiin.



## Category
Lines
