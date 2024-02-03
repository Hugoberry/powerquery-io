---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Pateikiamas „Excel“ darbaknygės turinys.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Pateikiamas „Excel“ darbaknygės turinys.    <ul>     <li> <code>useHeaders</code> gali būti „null“, loginė (teisinga / klaidinga) reikšmė, nurodanti, ar pirmoji kiekvienos pateiktos lentelės eilutė turi būti laikoma antrašte, ar parinkčių įrašu. Numatytoji reikšmė: klaidinga.</li>     <li> <code>delayTypes</code> gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar kiekvienos pateiktos lentelės stulpeliai turi būti be tipo. Numatytoji reikšmė: klaidinga.</li>    </ul>    Jei nurodytas <code>useHeaders</code> įrašas (ir <code>delayTypes</code> yra „null“), gali būti pateikti šie įrašo laukai:    <ul>     <li> <code>UseHeaders</code>: gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar pirmoji kiekvienos pateiktos lentelės eilutė turi būti laikoma antrašte. Numatytoji reikšmė: klaidinga.</li>     <li> <code>DelayTypes</code>: gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar kiekvienos pateiktos lentelės stulpeliai turi būti be tipo. Numatytoji reikšmė: klaidinga.</li>     <li> <code>InferSheetDimensions</code>: gali būti „null“ arba loginė (teisinga / klaidinga) reikšmė, nurodanti, ar darbalapio, kuriame yra duomenų, sritis turi būti nustatoma skaitant patį darbalapį, o ne skaitant dimensijų metaduomenis iš failo. Tai gali būti naudinga tais atvejais, kai dimensijų metaduomenys yra klaidingi. Įsidėmėkite, kad ši parinktis palaikoma tik „Open XML“ „Excel“ failuose, o ne senstelėjusiuose „Excel“ failuose. Numatytoji reikšmė: klaidinga.</li>    </ul>    


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
