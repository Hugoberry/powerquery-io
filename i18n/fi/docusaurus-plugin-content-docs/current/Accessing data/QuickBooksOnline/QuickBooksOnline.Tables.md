---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Tuo tietoja QuickBooks Onlinesta.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Palauttaa taulukon, jossa on QuickBooks Onlinessa käytettävissä olevien taulukoiden luettelo. Valinnainen tietueparametri <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:          <ul>            <li><code>ConnectionTimeout</code>: Kesto, joka määrittää, miten kauan odotetaan, ennen kuin hylätään yritys muodostaa yhteys palvelimeen.</li>            <li><code>CommandTimeout</code>: kesto, joka määrittää, miten kauan palvelinpuolen kyselyn suorittaminen sallitaan, ennen kuin se peruutetaan.</li>          </ul>        Tietueparametri määritetään muodossa [asetus1 = arvo1, asetus2 = arvo2...].    


