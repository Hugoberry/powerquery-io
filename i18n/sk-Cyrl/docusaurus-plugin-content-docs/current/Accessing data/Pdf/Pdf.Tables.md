---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Vráti všetky tabuľky nájdené v PDF súbore.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Vráti všetky tabuľky, ktoré sa našli v umiestnení <code>pdf</code>. Môžete zadať voliteľný parameter záznamu, <code>options</code>, ktorý slúži na zadanie ďalších vlastností. Záznam môže obsahovať tieto polia:    <ul><li><code>Implementation</code> : Verzia algoritmu, ktor&#225; sa m&#225; použiť pri identifik&#225;cii tabuliek. Star&#233; verzie s&#250; k dispoz&#237;cii iba na sp&#228;tn&#250; kompatibilitu, aby sa predišlo znefunkčneniu starš&#237;ch dotazov pri aktualiz&#225;cii algoritmov. Najnovšia verzia by mala vždy poskytovať najlepšie v&#253;sledky. Platn&#233; hodnoty s&#250; 1.3, 1.2, 1.1 alebo null.</li><li><code>StartPage</code> : Určuje prv&#250; stranu v rozsahu str&#225;n určen&#253;ch na presk&#250;manie. Predvolen&#225; hodnota: 1.</li><li><code>EndPage</code> : Určuje posledn&#250; stranu v rozsahu str&#225;n určen&#253;ch na presk&#250;manie. Predvolen&#225; hodnota: posledn&#225; strana dokumentu.</li><li><code>MultiPageTables</code> : Určuje, či sa podobn&#233; tabuľky na po sebe id&#250;cich stran&#225;ch automaticky skombinuj&#250; do jednej tabuľky. Predvolen&#225; hodnota: true.</li><li><code>EnforceBorderLines</code> : Určuje, či s&#250; čiary or&#225;movania vždy vyn&#250;ten&#233; ako ohraničenia buniek (v pr&#237;pade hodnoty true) alebo sa jednoducho použili ako jeden z viacer&#253;ch tipov pri určen&#237; ohraničenia buniek (v pr&#237;pade hodnoty false). Predvolen&#225; hodnota: false.</li></ul>    


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
