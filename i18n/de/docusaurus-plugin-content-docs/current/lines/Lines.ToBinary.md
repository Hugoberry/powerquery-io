---
title: Lines.ToBinary
---

# Lines.ToBinary


Konvertiert eine Liste mit Text unter Verwendung der angegebenen Codierung und des angegebenen Zeilentrennzeichens in einen Binärwert. Das angegebene Zeilentrennzeichen wird an jede Zeile angefügt.  Ohne Angabe werden das Wagenrücklauf- und das Zeilenvorschubzeichen verwendet.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Konvertiert eine Liste mit Text unter Verwendung der angegebenen Codierung und des angegebenen Zeilentrennzeichens in einen Binärwert. Das angegebene Zeilentrennzeichen wird an jede Zeile angefügt.  Ohne Angabe werden das Wagenrücklauf- und das Zeilenvorschubzeichen verwendet.



## Category
Lines
