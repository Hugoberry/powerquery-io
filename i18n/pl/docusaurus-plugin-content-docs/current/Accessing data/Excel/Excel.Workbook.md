---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Zwraca zawartość skoroszytu programu Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Zwraca zawartość skoroszytu programu Excel.    <ul>     <li> Element <code>useHeaders</code> może mieć wartość null lub wartość logiczną (true/false) wskazującą, czy pierwszy wiersz każdej zwracanej tabeli ma być traktowany jako nagłówek, czy jako rekord opcji. Wartość domyślna: false.</li>     <li> Element <code>delayTypes</code> może mieć wartość null lub wartość logiczną (true/false) wskazującą, czy kolumny każdej zwracanej tabeli powinny być pozostawione bez typu. Wartość domyślna: false.</li>    </ul>    Jeśli dla elementu <code>useHeaders</code> zostanie określony rekord (i element <code>delayTypes</code> ma wartość null), mogą zostać podane następujące pola rekordu:    <ul>     <li> <code>UseHeaders</code>: może mieć wartość null lub wartość logiczną (true/false) wskazującą, czy pierwszy wiersz każdej zwracanej tabeli ma być traktowany jako nagłówek. Wartość domyślna: false.</li>     <li> <code>DelayTypes</code>: może mieć wartość null lub wartość logiczną (true/false) wskazującą, czy kolumny każdej zwracanej tabeli powinny być pozostawione bez typu. Wartość domyślna: false.</li>     <li> <code>InferSheetDimensions</code>: może mieć wartość null lub wartość logiczną (true/false) wskazującą, czy wnioskowanie na temat obszaru arkusza zawierającego dane ma być wykonywane na podstawie odczytania samego arkusza, czy metadanych wymiarów z pliku. Może to być przydatne w przypadku, gdy metadane wymiarów są nieprawidłowe. Należy pamiętać, że ta opcja jest obsługiwana tylko w przypadku plików Open XML programu Excel, ale nie dla starszych plików programu Excel. Wartość domyślna: false.</li>    </ul>    


## Examples

### Example #1 
Zwróć zawartość arkusza Arkusz1 ze skoroszytu programu Excel.
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
