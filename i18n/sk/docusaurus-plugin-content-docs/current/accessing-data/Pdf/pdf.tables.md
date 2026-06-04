---
title: Pdf.Tables
---

# Pdf.Tables


Vráti všetky tabuľky nájdené v PDF súbore.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Vráti všetky tabuľky, ktoré sa našli v umiestnení `pdf`. Môžete zadať voliteľný parameter záznamu, `options`, ktorý slúži na zadanie ďalších vlastností. Záznam môže obsahovať tieto polia:

-   `Implementation` : Verzia algoritmu, ktorá sa má použiť pri identifikácii tabuliek. Staré verzie sú k dispozícii iba na spätnú kompatibilitu, aby sa predišlo znefunkčneniu starších dotazov pri aktualizácii algoritmov. Najnovšia verzia by mala vždy poskytovať najlepšie výsledky. Platné hodnoty sú 1.3, 1.2, 1.1 alebo null.
-   `StartPage` : Určuje prvú stranu v rozsahu strán určených na preskúmanie. Predvolená hodnota: 1.
-   `EndPage` : Určuje poslednú stranu v rozsahu strán určených na preskúmanie. Predvolená hodnota: posledná strana dokumentu.
-   `MultiPageTables` : Určuje, či sa podobné tabuľky na po sebe idúcich stranách automaticky skombinujú do jednej tabuľky. Predvolená hodnota: true.
-   `EnforceBorderLines` : Určuje, či sú čiary orámovania vždy vynútené ako ohraničenia buniek (v prípade hodnoty true) alebo sa jednoducho použili ako jeden z viacerých tipov pri určení ohraničenia buniek (v prípade hodnoty false). Predvolená hodnota: false.


## Examples

### Example #1
Vráti tabuľky nachádzajúce sa v dokumente sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Pristupuje sa k údajom
