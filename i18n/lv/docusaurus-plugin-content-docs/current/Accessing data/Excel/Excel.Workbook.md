---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Atgriež Excel darbgrāmatas saturu.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Atgriež Excel darbgrāmatas saturu.    <ul>     <li> <code>useHeaders</code> var būt Null, loģiska (true/false) vērtība, kas norāda, vai katras atgrieztās tabulas pirmā rinda ir jāuzskata par galveni, vai opciju ieraksts. Noklusējums: false.</li>     <li> <code>delayTypes</code> var būt Null vai loģiskā (true/false) vērtība, kas norāda, vai katras atgrieztās tabulas kolonnas ir jāatstāj bez tipa. Noklusējuma vērtība: false.</li>    </ul>    Ja parametram <code>useHeaders</code> ir norādīts ieraksts (un parametra <code>delayTypes</code> vērtība ir Null), var tikt nodrošināti šādi ieraksta lauki:    <ul>     <li> <code>UseHeaders</code>: var būt Null vai loģiska (true/false) vērtība, kas norāda, vai katras atgrieztās tabulas pirmā rinda ir jāuzskata par galveni. Noklusējums: false.</li>     <li> <code>DelayTypes</code>: var būt Null vai loģiska (true/false) vērtība, kas norāda, vai katras atgrieztās tabulas kolonnas ir jāatstāj bez tipa. Noklusējums: false.</li>     <li> <code>InferSheetDimensions</code>: var būt Null vai loģiska (true/false) vērtība, kas norāda, vai darblapas apgabalam, kurā ir dati, ir jābūt izsecinātam, lasot pašu darblapu, nevis failā lasot dimensiju metadatus. Tas var būt noderīgi gadījumos, ja dimensiju metadati nav pareizi. Ņemiet vērā, ka šī opcija tiek atbalstīta tikai Open XML Excel failiem, bet ne mantotajiem Excel failiem. Noklusējuma vērtība: false. </li>    </ul>    


## Examples

### Example #1 
Atgriežas uz Excel darbgrāmatas Lapas1 saturu.
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
