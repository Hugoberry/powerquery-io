---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Vrne vse tabele, najdene v datoteki PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Vrne vse tabele, najdene v <code>pdf</code>. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:    <ul><li><code>Implementation</code> : Različica algoritma, ki bo uporabljena pri identifikaciji tabel. Stare različice so na voljo samo za vzvratno združljivost, da lahko preprečite nedelovanje poizvedb zaradi posodobitev algoritma. Najnovejša različica mora vedno vrniti najboljše rezultate. Veljavne vrednosti so &#187;1.3&#171;, &#187;,1.2&#171;, &#187;1.1&#171; ali &#187;null&#171;.</li><li><code>StartPage</code> : Določa prvo stran v obsegu strani za preverjanje. Privzeto: 1.</li><li><code>EndPage</code> : Določa zadnjo stran v obsegu strani za preverjanje. Privzeto: zadnja stran dokumenta.</li><li><code>MultiPageTables</code> : Nadzoruje, ali bodo podobne tabele na zaporednih straneh samodejno združene v eno samo tabelo. Privzeto: true.</li><li><code>EnforceBorderLines</code> : Nadzoruje, ali so črte obrob vedno uveljavljene kot meje celic (če je nastavljeno na &#187;true&#171;) oziroma preprosto uporabljene kot en namig med mnogimi za določanje mej celic (če je nastavljeno na &#187;false&#171;). Privzeto: false.</li></ul>    


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
