---
title: Lines.ToBinary
---

# Lines.ToBinary


Konverterer en liste med tekst til en binær værdi ved hjælp af den angivne kodning og lineSeparator. Den angivne lineSeparator tilføjes på hver linje.  Hvis den ikke er angivet, bruges tegnene for vognretur og linjeskift.


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

Konverterer en liste med tekst til en binær værdi ved hjælp af den angivne kodning og lineSeparator. Den angivne lineSeparator tilføjes på hver linje.  Hvis den ikke er angivet, bruges tegnene for vognretur og linjeskift.



## Category
Lines
