---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Vraća sve tabele pronađene u PDF datoteci.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Vraća sve tabele pronađene u <code>pdf</code>. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>Implementation</code> : Verzija algoritma koja se koristi za identifikaciju tabela. Stare verzije su dostupne samo radi kompatibilnosti, kako bi se sprečilo da se stari upiti oštete ispravkama algoritma. Najnovija verzija bi uvek trebalo da daje najbolje rezultate. Važeće vrednosti su „1.3”, „1.2” „1.1”, ili bez vrednosti.</li><li><code>StartPage</code> : Određuje prvu stranicu u opsegu stranica koje treba ispitati. Podrazumevano: 1.</li><li><code>EndPage</code> : Određuje poslednju stranicu u opsegu stranica koje treba ispitati. Podrazumevano: poslednja stranica dokumenta.</li><li><code>MultiPageTables</code> : Kontroliše da li će se slične tabele na uzastopnim stranicama automatski kombinovati u jednu tabelu. Podrazumevano: „tačno“.</li><li><code>EnforceBorderLines</code> : Kontroliše da li se linije ivica uvek nameću kao granice ćelija (kada je vrednost „tačno“) ili se jednostavno koriste kao jedna od mnogo opcija za određivanje granica ćelija (kada je vrednost „netačno“). Podrazumevano: netačno.</li></ul>    


## Examples

### Example #1 
Vraća tabele koje se nalaze u dokumentu sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Pristup podacima
