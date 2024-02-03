---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Vrátí všechny tabulky nalezené v souboru PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Vrátí jakékoli tabulky nalezené v <code>pdf</code>. Pomocí nepovinného parametru záznamu <code>options</code> můžete zadat další vlastnosti. Záznam může obsahovat následující pole:    <ul><li><code>Implementation</code> : Verze algoritmu pro identifikaci tabulek. Star&#233; verze jsou k dispozici pouze kvůli zpětn&#233; kompatibilitě, aby se předešlo poškozen&#237; star&#253;ch dotazů aktualizacemi algoritmu. Nejnovějš&#237; verze by měla vždy poskytovat nejlepš&#237; v&#253;sledky. Platn&#233; hodnoty jsou 1.3, 1.2, 1.1 nebo null.</li><li><code>StartPage</code> : Určuje prvn&#237; str&#225;nku v oblasti str&#225;nek ke zkoum&#225;n&#237;. V&#253;choz&#237; hodnota: 1.</li><li><code>EndPage</code> : Určuje posledn&#237; str&#225;nku v oblasti str&#225;nek ke zkoum&#225;n&#237;. V&#253;choz&#237; hodnota: posledn&#237; str&#225;nka dokumentu.</li><li><code>MultiPageTables</code> : Určuje, jestli se podobn&#233; tabulky na po sobě jdouc&#237;ch str&#225;nk&#225;ch automaticky kombinuj&#237; do jedn&#233; tabulky. V&#253;choz&#237; hodnota: true.</li><li><code>EnforceBorderLines</code> : Určuje, jestli se č&#225;ry okrajů vždy vynucuj&#237; jako ohraničen&#237; buněk (v př&#237;padě hodnoty true), nebo se pouze použ&#237;vaj&#237; jako jeden z mnoha pomocn&#253;ch parametrů k určen&#237; ohraničen&#237; buněk (v př&#237;padě hodnoty false). V&#253;choz&#237; hodnota: false.</li></ul>    


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
