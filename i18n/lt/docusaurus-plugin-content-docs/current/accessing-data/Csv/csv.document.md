---
title: Csv.Document
---

# Csv.Document


CSV dokumento turinys pateikiamas kaip lentelė.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

CSV dokumento turinys pateikiamas kaip lentelė.

-   `columns` gali būti „null“, stulpelių skaičius, stulpelių pavadinimų sąrašas, lentelės tipas arba parinkčių įrašas.
-   `delimiter` gali būti vienas simbolis, simbolių sąrašas arba reikšmė `""`, nurodanti, kad eilutes turėtų būti atskirtos iš eilės einančiais tarpo simboliais. Numatytoji reikšmė: `","`.
-   Palaikomų `extraValues`reikšmių ieškokite `ExtraValues.Type`.
-   `encoding` nurodo teksto kodavimo tipą.

Jei nurodytas `columns` (ir `delimiter`, `extraValues`ir `encoding` yra „null“) įrašas, gali būti pateikti šie įrašų laukai:

-   `Delimiter`: vieno simbolio stulpelio skyriklis. Numatytoji reikšmė: `","`.
-   `Columns`: gali būti „null“, stulpelių skaičius, stulpelių pavadinimų sąrašas, lentelės tipas. Jei stulpelių skaičius yra mažesnis už įvestyje rastą skaičių, papildomų stulpelių bus nepaisoma. Jei stulpelių skaičius yra didesnis už įvestyje rastą skaičių, papildomi stulpeliai bus „null“. Jei nenurodyta, stulpelių skaičius nustatomas pagal tai, kas randama įvestyje.
-   `Encoding`: failo teksto kodavimas. Numatytoji reikšmė: 65001 (UTF-8).
-   `CsvStyle`: nurodo, kaip apdorojamos kabutės.
    -   `CsvStyle.QuoteAfterDelimiter` (numatytoji reikšmė): kabutės lauke yra reikšmingos tik iš karto po skyriklio.
    -   `CsvStyle.QuoteAlways`: kabutės lauke visada yra reikšmingos nepaisant jų vietos.
-   `QuoteStyle`: nurodo, kaip apdorojami eilučių lūžiai su kabutėmis.
    -   `QuoteStyle.Csv` (numatytoji reikšmė): eilučių lūžiai su kabutėmis laikomi duomenų dalimi, o ne dabartinės eilutės pabaiga.
    -   `QuoteStyle.None`: visi eilučių lūžiai laikomi dabartinės eilutės pabaiga, net kai jie įvyksta reikšmės su kabutėmis viduje.
-   `IncludeByteOrderMark`: loginė reikšmė, nurodanti, ar įtraukti baitų rikiavimo tvarkos žymę (KS) CSV išvesties pradžioje. Kai nustatyta kaip „true“, KS yra parašyta (pvz., UTF-8 KS`0xEF 0xBB 0xBF`); kai nustatyta kaip „false“, nėra įtrauktos KS. Ši parinktis taikoma tik išvesties scenarijuose. Numatytoji reikšmė: `false`.
-   `ExtraValues`: žr. `ExtraValues.Type`, kad rastumėte „ExtraValues“ palaikomų reikšmių.


## Examples

### Example #1
Apdoroti CSV tekstą su stulpelių antraštėmis.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
