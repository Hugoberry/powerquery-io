---
title: Excel.Workbook
---

# Excel.Workbook


Palauttaa Excel-työkirjan sisällön.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Palauttaa Excel-työkirjan sisällön.

-   `useHeaders` voi olla tyhjäarvo, looginen arvo (true/false), joka ilmaisee, käsitelläänkö kunkin palautetun taulukon ensimmäinen rivi otsikkona, tai asetustietue. (Lisätietoja asetustietueesta on alla.) Oletusarvo: false.
-   `delayTypes` voi olla tyhjäarvo tai looginen arvo (true/false), joka ilmaisee, tuleeko kunkin palautetun taulukon sarakkeet jättää tyypittömiksi. Oletusarvo: false.

Jos tietue on määritetty kohteelle `useHeaders` (ja `delayTypes` on tyhjäarvo), seuraavat tietuekentät voidaan antaa:

-   `UseHeaders`: Voi olla tyhjäarvo tai looginen arvo (true/false), joka ilmaisee, tuleeko kunkin palautetun taulukon ensimmäistä riviä käsitellä otsikkona. Oletusarvo: false.
-   `DelayTypes`: Voi olla tyhjäarvo tai looginen arvo (true/false), joka ilmaisee, tuleeko kunkin palautetun taulukon sarakkeet jättää tyypittömiksi. Oletusarvo: false.
-   `InferSheetDimensions`: Voi olla tyhjäarvo tai looginen arvo (tosi/epätosi), joka ilmaisee, tuleeko tietoja sisältävä laskentataulukon alue johtaa itse laskentataulukosta sen sijaan, että dimension metatiedot luetaan tiedostosta. Tästä voi olla hyötyä tapauksissa, joissa dimensioiden metatiedot ovat virheelliset. Huomaa, että tätä asetusta tuetaan vain Open XML -Excel-tiedostoissa, ei vanhoissa Excel-tiedostoissa. Oletusarvo: false.


## Examples

### Example #1
Palauttaa Taul1:n sisällön Excel-työkirjasta.
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
