---
title: Lines.FromText
---

# Lines.FromText


Konvertuje tekstualnu vrednost u listu tekstualnih vrednosti razdeljenih kod preloma reda. Ako includeLineSeparators ima vrednost „true“, znaci za prelom reda će biti uključeni u tekst.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Konvertuje tekstualnu vrednost u listu tekstualnih vrednosti razdeljenih u prelomima redova.

-   `text`: Tekstualna vrednost koju treba konvertovati u listu tekstualnih vrednosti.
-   `quoteStyle`: Navodi kako se rukuje prelomima redova. Vrednost `quoteStyle` može biti `null`. Podrazumevana vrednost je `QuoteStyle.None`.
-   `includeLineSeparators`: Navodi da li treba uključiti znakove za prelom reda u tekst. Vrednost `includeLineSeparators` može biti `null`. Podrazumevana vrednost je `false`.

Ako je zapis naveden za `quoteStyle` (a `includeLineSeparators` je `null`), mogu se obezbediti sledeća polja zapisa:

-   `QuoteStyle`: Navodi kako se obrađuju prelomi redova unutar navodnika.
    -   `QuoteStyle.Csv`: Prelomi redova unutar navodnika se tretiraju kao deo podataka, a ne kao kraj trenutnog reda.
    -   `QuoteStyle.None`: Svi prelomi redova se tretiraju kao kraj trenutnog reda, čak i kada se javljaju unutar vrednosti pod navodnicima. Ova vrednost je podrazumevana ako opcija `CsvStyle` nije navedena.
-   `CsvStyle`: Navodi kako se postupa sa navodnicima. Ne bi trebalo da se koristi sa `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Navodnici u polju su značajni odmah nakon `Delimiter`.
    -   `CsvStyle.QuoteAlways`: Navodnici u polju uvek imaju značaj bez obzira na to gde se pojavljuju.
-   `Delimiter`: Znak za razgraničavanje jednog znaka. Treba koristiti samo sa `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Navodi da li treba uključiti znakove za prelom reda u tekst. Podrazumevana vrednost je `false`.



## Category
Lines
