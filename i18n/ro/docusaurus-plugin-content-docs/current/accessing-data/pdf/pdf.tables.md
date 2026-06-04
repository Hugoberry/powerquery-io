---
title: Pdf.Tables
---

# Pdf.Tables


Returnează toate tabelele găsite într-un fișier PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Returnează toate tabelele găsite în `pdf`. Poate fi furnizat un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `Implementation` : Versiunea algoritmului de utilizat la identificarea tabelelor. Versiunile vechi sunt disponibile numai pentru compatibilitate inversă, pentru a împiedica defectarea interogărilor vechi de către actualizările de algoritmi. Cea mai nouă versiune ar trebui să ofere întotdeauna cele mai bune rezultate. Valorile valide sunt „1.3”, „1.2”, „1.1” sau nul.
-   `StartPage` : Specifică prima pagină din intervalul de pagini de examinat. Implicit: 1.
-   `EndPage` : Specifică ultima pagină din intervalul de pagini de examinat. Implicit: ultima pagină a documentului.
-   `MultiPageTables` : Controlează dacă tabelele similare de pe pagini consecutive vor fi automat combinate într-un singur tabel. Implicit: true.
-   `EnforceBorderLines` : Controlează dacă liniile de bordură sunt întotdeauna impuse ca limite de celule (dacă este true) sau dacă sunt utilizate ca indicii, între altele, pentru a determina limitele celulelor (dacă este false). Implicit: false.


## Examples

### Example #1
Returnează tabelele incluse în exemplu.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\exemplu.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Se accesează datele
