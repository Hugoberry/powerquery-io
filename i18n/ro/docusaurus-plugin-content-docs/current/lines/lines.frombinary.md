---
title: Lines.FromBinary
---

# Lines.FromBinary


Convertește o valoare binară într-o listă de valori text divizate la sfârșitul de linie. Dacă se specifică un stil de citare, atunci sfârșiturile de linie pot apărea între ghilimele. Dacă includeLineSeparators are valoarea true, atunci caracterele sfârșit de linie sunt incluse în text.


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

Convertește o valoare binară la o listă de valori text scindate la sfârșit de linie.

-   `binary`: valoarea binară de convertit la listă.
-   `quoteStyle`: specifică modul în care sunt tratate sfârșiturile de linie. Valoarea `quoteStyle` poate fi `null`. Valoarea implicită este `QuoteStyle.None`.
-   `includeLineSeparators`: specifică dacă se includ caracterele de sfârșit de linie în text. Valoarea `includeLineSeparators` poate fi `null`. Valoarea implicită este `false`.
-   `encoding`: specifică codificarea textului valorii binare. Valoarea `encoding` poate fi `null`. Valoarea implicită este `65001` (UTF-8).

Dacă este specificată o înregistrare pentru `quoteStyle` (și `includeLineSeparators` și `encoding` sunt `null`), pot fi furnizate următoarele câmpuri de înregistrare:

-   `QuoteStyle`: specifică modul în care sunt tratate sfârșiturile de linie între ghilimele.
    -   `QuoteStyle.Csv`: sfârșiturile de linie între ghilimele sunt tratate ca parte a datelor, nu ca sfârșit al rândului curent.
    -   `QuoteStyle.None`: toate sfârșiturile de linie sunt tratate ca sfârșit al rândului curent, chiar și atunci când apar în interiorul unei valori între ghilimele. Această valoare este cea implicită dacă nu se specifică opțiunea `CsvStyle`.
-   `CsvStyle`: specifică modul în care sunt tratate ghilimelele. Nu trebuie utilizat cu `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter` (implicit): ghilimelele dintr-un câmp sunt semnificative doar imediat după `null`.
    -   `CsvStyle.QuoteAlways`: ghilimelele dintr-un câmp sunt întotdeauna semnificative, indiferent unde apar.
-   `Delimiter`: un delimitator cu un singur caracter. Trebuie utilizat numai cu `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: specifică dacă se includ caractere sfârșit de linie în text. Valoarea implicită este `false`.
-   `Encoding`: codificarea text a valorii binare. Valoarea implicită este `65001` (UTF-8).



## Category
Lines
