---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Vráti obsah excelového zošita.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Vráti obsah excelového zošita.     <ul>     <li> <code>useHeaders</code> môže mať hodnotu null, logickú hodnotu (true/false), ktorá označuje, či sa má prvý riadok každej vrátenej tabuľky považovať za hlavičku alebo záznam možností. Predvolená hodnota: False. </li>     <li> <code>delayTypes</code> môže mať hodnotu null alebo logickú hodnotu (true/false) označujúcu, či majú stĺpce každej vrátenej tabuľky ostať netypové. Predvolená hodnota: False. </li>    </ul>    Ak je záznam zadaný pre <code>useHeaders</code> (a <code>delayTypes</code> má hodnotu null), môžu sa poskytnúť nasledujúce polia záznamu:     <ul>     <li> <code>UseHeaders</code>: Môže mať hodnotu null alebo logickú hodnotu (true/false) označujúcu, či sa má prvý riadok každej vrátenej tabuľky považovať za hlavičku. Predvolená hodnota: False. </li>     <li> <code>DelayTypes</code>: Môže mať hodnotu null alebo logickú hodnotu (true/false) označujúcu, či majú stĺpce každej vrátenej tabuľky zostať netypové. Predvolená hodnota: False. </li>     <li> <code>InferSheetDimensions</code>: Môže mať hodnotu null alebo logickú hodnotu (true/false) označujúcu, či sa má oblasť hárka, ktorá obsahuje údaje, odvodiť čítaním samotného hárka, a nie čítaním metaúdajov dimenzií zo súboru. Môže to byť užitočné v prípadoch, keď sú metaúdaje dimenzií nesprávne. Táto možnosť je podporovaná len pre excelové súbory vo formáte Open XML, nie pre staršie excelové súbory. Predvolená hodnota: False. </li>    </ul>    


## Examples

### Example #1 
Vráti zo zošita aplikácie Excel obsah hárka 1.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
