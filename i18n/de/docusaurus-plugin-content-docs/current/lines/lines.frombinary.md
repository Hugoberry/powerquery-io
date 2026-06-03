---
title: Lines.FromBinary
---

# Lines.FromBinary


Konvertiert einen Binärwert in eine Liste mit Textwerten, die an Zeilenumbrüchen geteilt werden. Bei Angabe eines Anführungszeichenstils stehen die Zeilenumbrüche unter Umständen in Anführungszeichen. Wenn "includeLineSeparators" den Wert "true" aufweist, sind die Zeilenumbruchzeichen Teil des Texts.


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

Konvertiert einen Binärwert in eine Liste von Textwerten, die bei Zeilenumbrüchen geteilt werden.

-   `binary`: Der Binärwert, der in die Liste konvertiert werden soll.
-   `quoteStyle`: Gibt an, wie Zeilenumbrüche behandelt werden. Der Wert von `quoteStyle` kann `null` sein. Der Standardwert ist `QuoteStyle.None`.
-   `includeLineSeparators`: Gibt an, ob die Zeilenumbruchzeichen in den Text eingeschlossen werden sollen. Der Wert von `includeLineSeparators` kann `null` sein. Der Standardwert ist `false`.
-   `encoding`: Gibt die Textcodierung des Binärwerts an. Der Wert von `encoding` kann `null` sein. Der Standardwert ist `65001` (UTF-8).

Wenn ein Datensatz für `quoteStyle` angegeben ist (und `includeLineSeparators` und `encoding` `null` sind), können die folgenden Datensatzfelder angegeben werden:

-   `QuoteStyle`: Gibt an, wie Zeilenumbrüche in Anführungszeichen behandelt werden.
    -   `QuoteStyle.Csv`: Zeilenumbrüche in Anführungszeichen werden als Teil der Daten und nicht als Ende der aktuellen Zeile behandelt.
    -   `QuoteStyle.None`: Alle Zeilenumbrüche werden als Ende der aktuellen Zeile behandelt, auch wenn sie innerhalb eines Werts in Anführungszeichen auftreten. Dieser Wert ist der Standardwert, wenn die Option `CsvStyle` nicht angegeben ist.
-   `CsvStyle`: Gibt an, wie Anführungszeichen behandelt werden. Sollte nicht mit `QuoteStyle.None` verwendet werden.
    -   `CsvStyle.QuoteAfterDelimiter`: Anführungszeichen in einem Feld sind nur unmittelbar hinter dem `Delimiter` signifikant.
    -   `CsvStyle.QuoteAlways`: Anführungszeichen in einem Feld sind unabhängig davon, wo sie positioniert sind, immer signifikant.
-   `Delimiter`: Ein einzelnes Trennzeichen. Sollte nur mit `CsvStyle.QuoteAfterDelimiter` verwendet werden.
-   `IncludeLineSeparators`: Gibt an, ob die Zeilenumbruchzeichen in den Text eingeschlossen werden sollen. Der Standardwert ist `false`.
-   `Encoding`: Die Textcodierung des Binärwerts. Der Standardwert ist `65001` (UTF-8).



## Category
Lines
