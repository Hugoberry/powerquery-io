---
title: Excel.Workbook
---

# Excel.Workbook


Pateikiamas „Excel“ darbaknygės turinys.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Pateikiamas „Excel“ darbaknygės turinys.

-   `useHeaders` gali būti „null“, loginė (teisinga / klaidinga) reikšmė, nurodanti, ar pirmoji kiekvienos pateiktos lentelės eilutė turi būti laikoma antrašte, ar parinkčių įrašu. Numatytoji reikšmė: klaidinga.
-   `delayTypes` gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar kiekvienos pateiktos lentelės stulpeliai turi būti be tipo. Numatytoji reikšmė: klaidinga.

Jei nurodytas `useHeaders` įrašas (ir `delayTypes` yra „null“), gali būti pateikti šie įrašo laukai:

-   `UseHeaders`: gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar pirmoji kiekvienos pateiktos lentelės eilutė turi būti laikoma antrašte. Numatytoji reikšmė: klaidinga.
-   `DelayTypes`: gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar kiekvienos pateiktos lentelės stulpeliai turi būti be tipo. Numatytoji reikšmė: klaidinga.
-   `InferSheetDimensions`: gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar darbalapio, kuriame yra duomenų, sritis turi būti nustatoma skaitant patį darbalapį, o ne skaitant dimensijų metaduomenis iš failo. Tai gali būti naudinga tais atvejais, kai dimensijų metaduomenys yra klaidingi. Įsidėmėkite, kad ši parinktis palaikoma tik „Open XML“ „Excel“ failuose, o ne senstelėjusiuose „Excel“ failuose. Numatytoji reikšmė: klaidinga.


## Examples

### Example #1
Pateikite Sheet1 turinį iš „Excel“ darbaknygės.
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
