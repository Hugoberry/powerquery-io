---
title: Excel.Workbook
---

# Excel.Workbook


Returnerer indholdet af Excel-projektmappen.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Returnerer indholdet af Excel-projektmappen.    <ul>     <li> <code>useHeaders</code> kan være null, og en logisk værdi (true/false) angiver, om den første række i hver returneret tabel skal behandles som en overskrift eller en indstillingspost. (Se nedenfor for at få flere oplysninger om posten indstillinger). Standard: falsk.</li>     <li> <code>delayTypes</code> kan være null eller en logisk værdi (true/false), der angiver, om kolonnerne i de enkelte returnerede tabeller skal forblive uspecificeret. Standard: false.</li>    </ul>    Hvis der er angivet en post for <code>useHeaders</code> (og <code>delayTypes</code> er null), kan følgende postfelter angives:    <ul>     <li> <code>UseHeaders</code>: kan være null eller en logisk værdi (true/false), der angiver, om den første række i hver returneret tabel skal behandles som en overskrift. Standard: false.</li>     <li> <code>DelayTypes</code>: kan være null eller en logisk værdi (true/false), der angiver, om kolonnerne i de enkelte returnerede tabeller skal forblive uden type. Standard: false.</li>     <li> <code>InferSheetDimensions</code>: kan være null eller en logisk værdi (true/false), der angiver, om det område i et regneark, der indeholder data, skal udledes ved at læse selve regnearket i stedet for ved at læse metadata om dimensionerne fra filen. Dette kan være nyttigt i tilfælde, hvor metadata om dimensionerne er forkerte. Bemærk, at denne indstilling kun understøttes for åbne XML Excel-filer, ikke for ældre Excel-filer. Standard: false.</li>    </ul>    


## Examples

### Example #1 
Returner indholdet af Ark1 fra en Excel-projektmappe.
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
