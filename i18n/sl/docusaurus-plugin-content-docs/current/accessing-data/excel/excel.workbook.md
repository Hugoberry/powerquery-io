---
title: Excel.Workbook
---

# Excel.Workbook


Vrne vsebino Excelovega delovnega zvezka.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Vrne vsebino Excelovega delovnega zvezka.

-   Vrednost `useHeaders` je lahko ničelna, logična vrednost (true/false), ki označuje, ali je treba prvo vrstico vsake vrnjene tabele obravnavati kot glavo, ali zapis možnosti. Privzeta vrednost: false.
-   Vrednost `delayTypes` je lahko ničelna ali logična vrednost (true/false), ki označuje, ali je treba stolpce vsake vrnjene tabele pustiti nevnesene. Privzeta vrednost: false.

Če je zapis določen za `useHeaders` (in vrednost `delayTypes` ničelna), lahko navedete ta polja zapisa:

-   `UseHeaders`: je lahko ničelna ali logična vrednost (true/false), ki označuje, ali je treba prvo vrstico vsake vrnjene tabele obravnavati kot glavo. Privzeta vrednost: false.
-   `DelayTypes`: je lahko ničelna ali logična vrednost (true/false), ki označuje, ali je treba stolpce vsake vrnjene tabele pustiti nevnesene. Privzeta vrednost: false.
-   `InferSheetDimensions`: je lahko ničelna ali logična vrednost (true/false), ki označuje, ali je območje delovnega lista, ki vsebuje podatke, treba namesto z branjem metapodatkov dimenzije iz datoteke izpeljati z branjem samega delovnega lista. To je lahko uporabno v primerih, kjer so metapodatki dimenzij nepravilni. Upoštevajte, da je ta možnost podprta samo za odprte Excelove datoteke"Odprtokodni XML", ne pa tudi za starejše Excelove datoteke. Privzeta vrednost: false.


## Examples

### Example #1
Vrne vsebino lista1 iz Excelovega delovnega zvezka.
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
