---
title: Csv.Document
---

# Csv.Document


## Description

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


## Details

CSV dokumento turinys pateikiamas kaip lentelė.    <ul>      <li>        <code>columns</code> gali būti „null“, stulpelių skaičius, stulpelių pavadinimų sąrašas, lentelės tipas arba parinkčių įrašas.      </li>      <li>        <code>delimiter</code> gali būti vienas simbolis, simbolių sąrašas arba reikšmė <code>""</code>, kuri nurodo eilutes, kurios turi būti perskirtos iš eilės einančiais tarpo simboliais. Numatytoji reikšmė: <code>„,“</code>.      </li>      <li>        Žr. <code>ExtraValues.Type</code> dėl palaikomų <code>extraValues</code> verčių.      </li>      <li>        <code>encoding</code> nurodo teksto kodavimo tipą.      </li>    </ul>    Jei <code>columns</code> įrašas nurodytas (o <code>delimiter</code>, <code>extraValues</code> ir <code>encoding</code> yra „null“), gali būti pateikti toliau nurodyti įrašo laukai:    <ul>      <li>        <code>Delimiter</code>: stulpelių skyriklis. Numatytoji reikšmė: <code>„,“</code>.      </li>      <li>        <code>Columns</code>: gali būti „null“, stulpelių skaičiaus, stulpelių pavadinimų sąrašo arba lentelės tipo. Jei stulpelių skaičius yra mažesnis nei nurodyta įvestyje, papildomų stulpelių bus nepaisoma. Jei stulpelių yra daugiau negu nustatyta įvestyje, papildomi stulpeliai bus „null“. Jei stulpelių skaičius nenurodytas, jis bus nustatytas pagal duomenis, rastus įvestyje.      </li>      <li>        <code>Encoding</code>: failo teksto kodavimas. Numatytoji reikšmė: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: nurodo, kaip tvarkomos kabutės.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (numatytoji reikšmė): svarbios tik tos lauke esančios kabutės, kurios yra iš karto po skyriklio.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: lauke esančios kabutės yra svarbios visada, nepriklausomai nuo to, kur jos rodomos.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: nurodo, kaip tvarkomi eilučių lūžiai su kabutėmis.            <ul>          <li>            <code>QuoteStyle.Csv</code> (default): eilučių lūžiai su kabutėmis laikomi duomenų dalimi, o ne dabartinės eilutės pabaiga.          </li>          <li>            <code>QuoteStyle.None</code>: visi eilučių lūžiai laikomi dabartinės eilutės pabaiga, net jei jie yra reikšmėje su kabutėmis.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Apdoroti CSV tekstą su stulpelių antraštėmis
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




## Category
Accessing data
