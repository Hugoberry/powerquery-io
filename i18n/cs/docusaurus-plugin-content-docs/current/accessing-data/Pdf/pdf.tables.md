---
title: Pdf.Tables
---

# Pdf.Tables


Vrátí všechny tabulky nalezené v souboru PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Vrátí jakékoli tabulky nalezené v `pdf`. Pomocí nepovinného parametru záznamu `options` můžete zadat další vlastnosti. Záznam může obsahovat následující pole:

-   `Implementation` : Verze algoritmu pro identifikaci tabulek. Staré verze jsou k dispozici pouze kvůli zpětné kompatibilitě, aby se předešlo poškození starých dotazů aktualizacemi algoritmu. Nejnovější verze by měla vždy poskytovat nejlepší výsledky. Platné hodnoty jsou 1.3, 1.2, 1.1 nebo null.
-   `StartPage` : Určuje první stránku v oblasti stránek ke zkoumání. Výchozí hodnota: 1.
-   `EndPage` : Určuje poslední stránku v oblasti stránek ke zkoumání. Výchozí hodnota: poslední stránka dokumentu.
-   `MultiPageTables` : Určuje, jestli se podobné tabulky na po sobě jdoucích stránkách automaticky kombinují do jedné tabulky. Výchozí hodnota: true.
-   `EnforceBorderLines` : Určuje, jestli se čáry okrajů vždy vynucují jako ohraničení buněk (v případě hodnoty true), nebo se pouze používají jako jeden z mnoha pomocných parametrů k určení ohraničení buněk (v případě hodnoty false). Výchozí hodnota: false.


## Examples

### Example #1
Vrátí tabulky obsažené v souboru sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Přístup k datům
