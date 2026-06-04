---
title: Pdf.Tables
---

# Pdf.Tables


Vrne vse tabele, najdene v datoteki PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Vrne vse tabele, najdene v `pdf`. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `Implementation` : Različica algoritma, ki bo uporabljena pri identifikaciji tabel. Stare različice so na voljo samo za vzvratno združljivost, da lahko preprečite nedelovanje poizvedb zaradi posodobitev algoritma. Najnovejša različica mora vedno vrniti najboljše rezultate. Veljavne vrednosti so"1.3",",1.2","1.1"ali"null".
-   `StartPage` : Določa prvo stran v obsegu strani za preverjanje. Privzeto: 1.
-   `EndPage` : Določa zadnjo stran v obsegu strani za preverjanje. Privzeto: zadnja stran dokumenta.
-   `MultiPageTables` : Nadzoruje, ali bodo podobne tabele na zaporednih straneh samodejno združene v eno samo tabelo. Privzeto: true.
-   `EnforceBorderLines` : Nadzoruje, ali so črte obrob vedno uveljavljene kot meje celic (če je nastavljeno na"true") oziroma preprosto uporabljene kot en namig med mnogimi za določanje mej celic (če je nastavljeno na"false"). Privzeto: false.


## Examples

### Example #1
Vrne tabele, ki jih vsebuje sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Dostop do podatkov
