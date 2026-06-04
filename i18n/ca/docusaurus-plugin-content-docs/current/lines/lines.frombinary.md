---
title: Lines.FromBinary
---

# Lines.FromBinary


Converteix un valor binari en una llista de valors de text separats per salts de línia. Si s'especifica un estil de cita, és possible que els salts de línia apareguin entre cometes. Si includeLineSeparators té el valor true, els caràcters de salt de línia s'inclouen al text.


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

Converteix un valor binari en una llista de valors de text dividits als salts de línia.

-   `binary`: el valor binari que es convertirà a la llista.
-   `quoteStyle`: especifica com es gestionen els salts de línia. El valor de `quoteStyle` pot ser `nul`. El valor per defecte és `QuoteStyle.None`.
-   `includeLineSeparators`: especifica si s'han d'incloure els caràcters del salt de línia al text. El valor de `includeLineSeparators` pot ser `nul`. El valor per defecte és `fals`.
-   `encoding`: especifica la codificació de text del valor binari. El valor de `encoding` pot ser `nul`. El valor per defecte és `65001` (UTF-8).

Si s'especifica un registre per `quoteStyle` (i `includeLineSeparators` i `encoding` són `nuls`), es poden proporcionar els següents camps de registre:

-   `QuoteStyle`: especifica com es gestionen els salts de línia entre cometes.
    -   `QuoteStyle.Csv`: els salts de línia amb cometes es tracten com si fossin part de les dades, i no com si fossin el final de la fila actual.
    -   `QuoteStyle.None`: tots els salts de línia es tracten com si fossin el final de la fila actual, també en cas que estiguin dins d'un valor entre cometes. Aquest és el valor per defecte si l'opció `CsvStyle` no s'especifica.
-   `CsvStyle`: especifica com es tracten les cometes. No s'ha de fer servir amb `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: les cometes d'un camp només són importants i van justament després del `delimitador`.
    -   `CsvStyle.QuoteAlways`: les cites d'un camp són significatives independentment d'on apareguin.
-   `Delimitador`: delimitador d'un sol caràcter. Només s'ha de fer servir amb `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: especifica si s'han d'incloure els caràcters del salt de línia al text. El valor per defecte és `fals`.
-   `Codificació`: la codificació del text del valor binari. El valor per defecte és `65001` (UTF-8).



## Category
Lines
