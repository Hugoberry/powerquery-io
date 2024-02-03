---
title: Lines.FromText
---

# Lines.FromText


## Description

Muuntaa tekstiarvon luetteloksi tekstiarvoja, jotka on jaettu osiin rivinvaihtojen kohdalla. Jos includeLineSeparators-arvo on true, rivinvaihtomerkit sisältyvät tekstiin.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Muuntaa tekstiarvon luetteloksi tekstiarvoja, jotka on jaettu osiin rivinvaihtojen kohdalla. Jos includeLineSeparators-arvo on true, rivinvaihtomerkit sisältyvät tekstiin.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (oletus) mitään lainaustoimintaa ei tarvita.</li>            <li><code>QuoteStyle.Csv:</code> lainaus on CSV-kohtainen. Lainausmerkkiä käytetään rajaamaan kyseiset alueet, ja lainausmerkkiparilla ilmaistaan yksittäinen lainausmerkki kyseisellä alueella. </li>          </ul>        </div>    



## Category
Lines
