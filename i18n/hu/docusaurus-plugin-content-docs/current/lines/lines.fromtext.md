---
title: Lines.FromText
---

# Lines.FromText


Átalakít egy szöveges értéket a sortöréseknél elválasztott szöveges értékekből álló listára. Ha az includeLineSeparators értéke igaz, a sortörés karakterek a szöveg részét képezik.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Szöveges értéket konvertál sortöréseknél felosztott szöveges értékek listájává.

-   `text`: A szöveges értékek listájává konvertálandó szöveges érték.
-   `quoteStyle`: A sortörések kezelésének módját adja meg. A(z) `quoteStyle` értéke `null` lehet. Az alapértelmezett érték a `QuoteStyle.None`.
-   `includeLineSeparators`: Megadja, hogy a sortörési karakterek szerepeljenek-e a szövegben. A(z) `includeLineSeparators` értéke `null` lehet. Az alapértelmezett érték `false`.

Ha meg van adva egy rekord a(z) `quoteStyle` elemhez (és a(z) `includeLineSeparators` `null`), a következő rekordmezők adhatók meg:

-   `QuoteStyle`: Az idézőjelek között álló szóközök kezelésének módját adja meg.
    -   `QuoteStyle.Csv`: A rendszer az idézőjelek között álló sortöréseket az adatok részeként kezeli, nem pedig az aktuális sor végeként.
    -   `QuoteStyle.None`: A rendszer minden sortörést az aktuális sor végeként kezel, még akkor is, ha idézőjelek között álló értékben szerepel. Ez az alapértelmezett érték, ha nincs megadva a `CsvStyle` beállítás.
-   `CsvStyle`: Az idézőjelek kezelésének módját adja meg. Nem használható a `QuoteStyle.None` beállítással.
    -   `CsvStyle.QuoteAfterDelimiter`: A mezőkben lévő idézőjelek csak akkor számítanak, ha közvetlenül egy `Elválasztó karakter` után állnak.
    -   `CsvStyle.QuoteAlways`: A mezőkben szereplő idézőjeleket a program mindig figyelembe veszi, függetlenül attól, hogy hol szerepelnek.
-   `Elválasztó karakter`: Egy karakterből álló elválasztó. Csak a `CsvStyle.QuoteAfterDelimiter` beállítással használható.
-   `IncludeLineSeparators`: Megadja, hogy a sortörési karakterek szerepeljenek-e a szövegben. Az alapértelmezett érték `false`.



## Category
Lines
