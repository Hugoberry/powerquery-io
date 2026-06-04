---
title: Lines.FromText
---

# Lines.FromText


Converteix un valor de text en una llista de valors de text dividits per salts de línia. Si includeLineSeparators té el valor true, els caràcters del salt de línia s'inclouen al text.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Converteix un valor de text en una llista de valors de text dividits als salts de línia.

-   `text`: el valor de text que es convertirà a la llista de valors de text.
-   `quoteStyle`: especifica com es gestionen els salts de línia. El valor de `quoteStyle` pot ser `nul`. El valor per defecte és `QuoteStyle.None`.
-   `includeLineSeparators`: especifica si s'han d'incloure els caràcters del salt de línia al text. El valor de `includeLineSeparators` pot ser `nul`. El valor per defecte és `fals`.

Si s'especifica un registre per a `quoteStyle` (i `includeLineSeparators` és `nul`), es poden proporcionar els següents camps de registre:

-   `QuoteStyle`: especifica com es gestionen els salts de línia entre cometes.
    -   `QuoteStyle.Csv`: els salts de línia amb cometes es tracten com si fossin part de les dades, i no com si fossin el final de la fila actual.
    -   `QuoteStyle.None`: tots els salts de línia es tracten com si fossin el final de la fila actual, també en cas que estiguin dins d'un valor entre cometes. Aquest és el valor per defecte si l'opció `CsvStyle` no s'especifica.
-   `CsvStyle`: especifica com es tracten les cometes. No s'ha de fer servir amb `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: les cometes d'un camp només són importants i van justament després del `delimitador`.
    -   `CsvStyle.QuoteAlways`: les cites d'un camp són significatives independentment d'on apareguin.
-   `Delimitador`: delimitador d'un sol caràcter. S'ha de fer servir només amb `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: especifica si s'han d'incloure els caràcters del salt de línia al text. El valor per defecte és `fals`.



## Category
Lines
