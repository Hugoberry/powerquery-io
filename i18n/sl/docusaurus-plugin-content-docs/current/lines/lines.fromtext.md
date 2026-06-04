---
title: Lines.FromText
---

# Lines.FromText


Pretvori besedilno vrednost v seznam besedilnih vrednosti, ločenih pri prelomih vrstic. Če je vrednost"includeLineSeparators"enaka"true", so znaki za prelom vrstic vključeni v besedilo.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Pretvori besedilno vrednost v seznam besedilnih vrednosti, ločenih pri prelomih vrstic.

-   `text`: besedilna vrednost za pretvorbo v seznam besedilnih vrednosti.
-   `quoteStyle`: določa način obravnave prelomov vrstic. Vrednost `quoteStyle` je lahko `null`. Privzeta vrednost je `QuoteStyle.None`.
-   `includeLineSeparators`: določa, ali bodo znaki za prelom vrstic vključeni v besedilo. Vrednost `includeLineSeparators` je lahko `null`. Privzeta vrednost je `false`.

Če je zapis določen za `quoteStyle` (in če je `includeLineSeparators` `null`), so lahko navedena ta polja zapisov:

-   `QuoteStyle`: določa način obravnave prelomov vrstic v narekovajih.
    -   `QuoteStyle.Csv`: prelomi vrstic v narekovajih so obravnavani kot del podatkov in ne kot konec trenutne vrstice.
    -   `QuoteStyle.None`: vsi prelomi vrstice se obravnavajo kot konec trenutne vrstice, tudi če so v vrednosti z narekovaji. Ta vrednost je privzeta, če možnost `CsvStyle` ni določena.
-   `CsvStyle`: določa način obravnave narekovajev. Ne uporabljajte z lastnostjo `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: narekovaji v polju so pomembni le takoj za `ločilom`.
    -   `CsvStyle.QuoteAlways`: narekovaji v polju so vedno pomembni ne glede na to, kje so.
-   `Ločilo`: ločilo za ločevanje enega znaka. Uporabite le z lastnostjo `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: določa, ali bodo znaki za prelom vrstic vključeni v besedilo. Privzeta vrednost je `false`.



## Category
Lines
