---
title: Excel.Workbook
---

# Excel.Workbook


Returnează conținutul registrului de lucru Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Returnează conținutul registrului de lucru Excel.

-   `useHeaders` poate fi nul, o valoare logică (true/false) care indică dacă primul rând al fiecărui tabel returnat trebuie tratat ca antet sau ca o înregistrare de opțiuni. Implicit: false.
-   `delayTypes` poate fi nul sau o valoare logică (true/false) care indică dacă coloanele fiecărui tabel returnat trebuie lăsate fără tip. Implicit: false.

Dacă o înregistrare este specificată pentru `useHeaders` (și `delayTypes` este nul), pot fi furnizate următoarele câmpuri de înregistrare:

-   `UseHeaders`: poate fi nul sau o valoare logică (true/false) care indică dacă primul rând al fiecărui tabel returnat trebuie tratat ca antet. Implicit: false.
-   `DelayTypes`: poate fi nul sau o valoare logică (true/false) care indică dacă coloanele fiecărui tabel returnat trebuie lăsate fără tip. Implicit: false.
-   `InferSheetDimensions`: poate fi nul sau o valoare logică (true/false) care indică dacă suprafața unei foi de lucru care conține date trebuie dedusă citind foaia de lucru în sine, nu citind metadatele dimensiunilor din fișier. Acest lucru poate fi util în cazurile în care metadatele dimensiunilor sunt incorecte. Rețineți că această opțiune este acceptată numai pentru fișierele Open XML Excel, nu pentru fișierele Excel moștenite. Implicit: false.


## Examples

### Example #1
Returnați conținutul din Foaia1 dintr-un registru de lucru Excel.
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
