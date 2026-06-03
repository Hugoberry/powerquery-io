---
title: Pdf.Tables
---

# Pdf.Tables


Returnerer de tabeller, der findes i en PDF-fil.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Returnerer tabeller fundet i `pdf`. Der kan angives en valgfri postparameter, `options`, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:

-   `Implementation` : Den version af algoritmen, der skal bruges til at identificere tabeller. Gamle versioner er kun tilgængelige til bagudkompatibilitet, så gamle forespørgsler forhindres i at blive brudt af algoritmeopdateringer. Den nyeste version bør altid give de bedste resultater. Gyldige værdier er "1,3", "1,2", "1,1" eller nul.
-   `StartPage` : Angiver den første side i udsnittet af sider, der skal undersøges. Som standard: 1.
-   `EndPage` : Angiver den sidste side i udsnittet af sider, der skal undersøges. Standard: den sidste side i dokumentet.
-   `MultiPageTables` : Kontrollerer, om ensartede tabeller på flere sider i træk automatisk samles til en enkelt tabel. Som standard: true.
-   `EnforceBorderLines` : Angiver, om kantlinjer altid gennemtvinges som cellegrænser (hvis det er true) eller bare er én faktor blandt mange andre, som bestemmer cellegrænser (hvis det er false). Som standard: false.


## Examples

### Example #1
Returnerer tabellerne i eksempel.pdf.
```powerquery
Pdf.Tables(File.Contents ("c:\eksempel.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Tilgår data
