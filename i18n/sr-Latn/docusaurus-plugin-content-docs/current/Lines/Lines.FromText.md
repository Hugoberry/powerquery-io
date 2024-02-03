---
title: Lines.FromText
---

# Lines.FromText


## Description

Konvertuje tekstualnu vrednost u listu tekstualnih vrednosti razdeljenih kod preloma reda. Ako includeLineSeparators ima vrednost „true“, znaci za prelom reda će biti uključeni u tekst.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Konvertuje tekstualnu vrednost u listu tekstualnih vrednosti razdeljenih kod preloma reda. Ako includeLineSeparators ima vrednost „true“, znaci za prelom reda će biti uključeni u tekst.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (podrazumevano) Nije potrebno navesti ponašanje prilikom upotrebe znakova navoda.</li>            <li><code>QuoteStyle.Csv:</code> Znakovi navoda se koriste u skladu sa CSV datotekom. Dvostruki znak navoda se koristi za označavanje takvih regiona, a par dvostrukih znakova navoda se koristi za označavanje jednog dvostrukog znaka navoda u okviru takvog regiona. </li>          </ul>        </div>    



## Category
Lines
