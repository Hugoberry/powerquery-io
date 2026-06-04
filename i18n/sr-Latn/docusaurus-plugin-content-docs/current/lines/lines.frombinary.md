---
title: Lines.FromBinary
---

# Lines.FromBinary


Konvertuje binarnu vrednost u listu tekstualnih vrednosti podeljenih kod preloma reda. Ako se navede stil znakova navoda, prelomi reda se mogu pojaviti pod znakovima navoda. Ako includeLineSeparators ima vrednost „true“, znakovi za prelom reda su uključeni u tekst.


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

Konvertuje binarnu vrednost u listu tekstualnih vrednosti razdeljenih u prelomima redova.

-   `binary`: Binarna vrednost za konvertovanje u listu.
-   `quoteStyle`: Navodi kako se rukuje prelomima redova. Vrednost `quoteStyle` može biti `null`. Podrazumevana vrednost je `QuoteStyle.None`.
-   `includeLineSeparators`: Navodi da li treba uključiti znakove za prelom reda u tekst. Vrednost `includeLineSeparators` može biti `null`. Podrazumevana vrednost je `false`.
-   `encoding`: Navodi kodiranje teksta binarne vrednosti. Vrednost `encoding` može biti `null`. Podrazumevana vrednost je `65001` (UTF-8).

Ako je zapis naveden za `quoteStyle` (a `includeLineSeparators` i `encoding` su `null`), mogu se obezbediti sledeća polja zapisa:

-   `QuoteStyle`: Navodi kako se obrađuju prelomi redova unutar navodnika.
    -   `QuoteStyle.Csv`: Prelomi redova unutar navodnika se tretiraju kao deo podataka, a ne kao kraj trenutnog reda.
    -   `QuoteStyle.None`: Svi prelomi redova se tretiraju kao kraj trenutnog reda, čak i kada se javljaju unutar vrednosti pod navodnicima. Ova vrednost je podrazumevana ako opcija `CsvStyle` nije navedena.
-   `CsvStyle`: Navodi kako se postupa sa navodnicima. Ne bi trebalo da se koristi sa `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Navodnici u polju su značajni odmah nakon `Delimiter`.
    -   `CsvStyle.QuoteAlways`: Navodnici u polju uvek imaju značaj bez obzira na to gde se pojavljuju.
-   `Delimiter`: Znak za razgraničavanje jednog znaka. Treba koristiti samo sa `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Navodi da li treba uključiti znakove za prelom reda u tekst. Podrazumevana vrednost je `false`.
-   `Encoding`: Kodiranje teksta binarne vrednosti. Podrazumevana vrednost je `65001` (UTF-8).



## Category
Lines
