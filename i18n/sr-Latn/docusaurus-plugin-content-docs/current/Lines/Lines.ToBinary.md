---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Konvertuje listu tekstualnih vrednosti u binarnu vrednost pomoću navedenog kodiranja i svojstva lineSeparator. Navedeno svojstvo lineSeparator se dodaje na kraj svakog reda.  Ako nije navedeno, koriste se znakovi za kraj reda i znakovi za položaj u sledećem redu.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

Konvertuje listu tekstualnih vrednosti u binarnu vrednost pomoću navedenog kodiranja i svojstva lineSeparator. Navedeno svojstvo lineSeparator se dodaje na kraj svakog reda.  Ako nije navedeno, koriste se znakovi za kraj reda i znakovi za položaj u sledećem redu.



## Category
Lines
