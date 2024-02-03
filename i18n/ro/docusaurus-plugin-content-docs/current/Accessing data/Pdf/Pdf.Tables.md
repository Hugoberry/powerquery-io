---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Returnează toate tabelele găsite într-un fișier PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Returnează toate tabelele găsite în <code>pdf</code>. Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>Implementation</code> : Versiunea algoritmului de utilizat la identificarea tabelelor. Versiunile vechi sunt disponibile numai pentru compatibilitate inversă, pentru a &#238;mpiedica defectarea interogărilor vechi de către actualizările de algoritmi. Cea mai nouă versiune ar trebui să ofere &#238;ntotdeauna cele mai bune rezultate. Valorile valide sunt „1.3”, „1.2”, „1.1” sau nul.</li><li><code>StartPage</code> : Specifică prima pagină din intervalul de pagini de examinat. Implicit: 1.</li><li><code>EndPage</code> : Specifică ultima pagină din intervalul de pagini de examinat. Implicit: ultima pagină a documentului.</li><li><code>MultiPageTables</code> : Controlează dacă tabelele similare de pe pagini consecutive vor fi automat combinate &#238;ntr-un singur tabel. Implicit: true.</li><li><code>EnforceBorderLines</code> : Controlează dacă liniile de bordură sunt &#238;ntotdeauna impuse ca limite de celule (dacă este true) sau dacă sunt utilizate ca indicii, &#238;ntre altele, pentru a determina limitele celulelor (dacă este false). Implicit: false.</li></ul>    


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
