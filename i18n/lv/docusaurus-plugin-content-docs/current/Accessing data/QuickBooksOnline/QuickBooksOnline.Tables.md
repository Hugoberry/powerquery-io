---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importējiet datus no pakalpojuma QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Atgriež tabulu, kurā ir norādītas pakalpojumā QuickBooks Online pieejamās tabulas. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai pārvaldītu tālāk norādītās opcijas.          <ul>            <li><code>ConnectionTimeout</code>: ilgums, kas nosaka, cik ilgi jāgaida, pirms atmest mēģinājumu izveidot savienojumu ar serveri.</li>            <li><code>CommandTimeout</code>: ilgums, kas nosaka, cik ilgi atļauts darbināt servera puses vaicājumu, pirms tas tiek atcelts.</li>          </ul>        Ieraksta parametrs tiek norādīts, piemēram, šādi: [option1 = value1, option2 = value2...].    


