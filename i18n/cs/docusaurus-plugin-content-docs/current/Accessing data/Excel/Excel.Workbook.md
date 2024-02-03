---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Vrátí obsah excelového sešitu.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Vrátí obsah excelového sešitu.     <ul>     <li> <code>useHeaders</code> může mít hodnotu null nebo logickou hodnotu (true/false) označující, jestli se má první řádek každé vrácené tabulky považovat za záhlaví nebo záznam možností. Výchozí hodnota: false. </li>     <li> <code>delayTypes</code> může mít hodnotu null nebo logickou hodnotu (true/false), která určuje, jestli se mají sloupce všech vrácených tabulek ponechat netypové. Výchozí hodnota: false. </li>    </ul>    Pokud se pro <code>useHeaders</code> zadá záznam (a <code>delayTypes</code> má hodnotu null), můžou se zadat následující pole záznamů:     <ul>     <li> <code>UseHeaders</code>: Může mít hodnotu null nebo logickou hodnotu (true/false) označující, jestli by se měl první řádek každé vrácené tabulky považovat za záhlaví. Výchozí hodnota: false. </li>     <li> <code>DelayTypes</code>: Může mít hodnotu null nebo logickou hodnotu (true/false), která určuje, jestli se mají sloupce všech vrácených tabulek ponechat netypové. Výchozí hodnota: false. </li>     <li> <code>InferSheetDimensions</code>: Může mít hodnotu null nebo logickou hodnotu (true/false), která označuje, jestli má být oblast listu, která obsahuje data, odvozená čtením samotného listu, nikoli čtením metadat dimenze ze souboru. Může to být užitečné v případech, kdy nejsou metadata dimenzí správná. Poznámka: Tato možnost se podporuje jenom u souborů Excelu ve formátu Open XML, nikoli u souborů Excelu starší verze. Výchozí hodnota: false. </li>    </ul>    


## Examples

### Example #1 
Vrátí z excelového sešitu obsah listu List1.
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
