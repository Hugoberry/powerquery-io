---
title: Lines.FromText
---

# Lines.FromText


Convertește o valoare text într-o listă de valori text divizate la sfârșiturile de linie. Dacă includeLineSeparators este true, atunci caracterele sfârșit de linie sunt incluse în text.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Convertește o valoare text la o listă de valori text scindate la sfârșit de linie.

-   `text`: valoarea text de convertit la lista de valori text.
-   `quoteStyle`: specifică modul în care sunt tratate sfârșiturile de linie. Valoarea `quoteStyle` poate fi `null`. Valoarea implicită este `QuoteStyle.None`.
-   `includeLineSeparators`: specifică dacă se includ caracterele de sfârșit de linie în text. Valoarea `includeLineSeparators` poate fi `null`. Valoarea implicită este `false`.

Dacă este specificată o înregistrare pentru `quoteStyle` (și `includeLineSeparators` este `null`), pot fi furnizate următoarele câmpuri de înregistrare:

-   `QuoteStyle`: specifică modul în care sunt tratate sfârșiturile de linie între ghilimele.
    -   `QuoteStyle.Csv`: sfârșiturile de linie între ghilimele sunt tratate ca parte a datelor, nu ca sfârșit al rândului curent.
    -   `QuoteStyle.None`: toate sfârșiturile de linie sunt tratate ca sfârșit al rândului curent, chiar și atunci când apar în interiorul unei valori între ghilimele. Această valoare este cea implicită dacă nu se specifică opțiunea `CsvStyle`.
-   `CsvStyle`: specifică modul în care sunt tratate ghilimelele. Nu trebuie utilizat cu `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter` (implicit): ghilimelele dintr-un câmp sunt semnificative doar imediat după `null`.
    -   `CsvStyle.QuoteAlways`: ghilimelele dintr-un câmp sunt întotdeauna semnificative, indiferent unde apar.
-   `Delimiter`: un delimitator cu un singur caracter. Trebuie utilizat numai cu `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: specifică dacă se includ caractere sfârșit de linie în text. Valoarea implicită este `false`.



## Category
Lines
