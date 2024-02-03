---
title: Csv.Document
---

# Csv.Document


## Description

Vrne vsebino dokumenta CSV kot tabelo.


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

Vrne vsebino dokumenta CSV v tabeli.    <ul>      <li>        <code>columns</code> je lahko nič, številka stolpcev, seznam imen stolpcev, vrsta tabele ali zapis možnosti.      </li>      <li>        <code>delimiter</code> je lahko en znak, seznam znakov ali vrednost <code>""</code>, ki ponazarja, katere vrstice morajo biti razdeljene z zaporednimi presledki. Privzeto: <code>","</code>.      </li>      <li>        Sklicujte se na <code>ExtraValues.Type</code> za podprte vrednosti za <code>extraValues</code>.      </li>      <li>        <code>encoding</code> določa vrsto šifriranja besedila.      </li>    </ul>    Če je naveden zapis za <code>columns</code> (in imajo <code>delimiter</code>, <code>extraValues</code> ter <code>encoding</code> vrednost nič), so morda na voljo ta polja zapisov:    <ul>      <li>        <code>Delimiter</code>: ločilo stolpcev. Privzeto: <code>","</code>.      </li>      <li>        <code>Columns</code>: je lahko vrednost nič, število stolpcev, seznam imen stolpcev ali vrsta tabele. Če je število stolpcev nižje od števila, najdenega v vnosu, bodo dodatni stolpci prezrti. Če je število stolpcev višje od števila, najdenega v vnosu, imajo dodatni stolpci vrednost nič. Če ni navedeno, število stolpcev določa vrednost vnosa.      </li>      <li>        <code>Encoding</code>: šifriranje besedila datoteke. Privzeto: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: določa način obravnave navedkov.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (privzeto): navedki v polju so pomembni le takoj za ločilom.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: navedki v polju so vedno pomembni, ne glede na mesto pojavitve.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: določa način obravnave citiranih prelomov vrstic.        <ul>          <li>            <code>QuoteStyle.Csv</code> (privzeto): citirani prelomi vrstic se obravnavajo kot del podatkov in ne na koncu trenutne vrstice.          </li>          <li>            <code>QuoteStyle.None</code>: vsi prelomi vrstic se obravnavajo na koncu trenutne vrstice, tudi če se vrstica pojavi v citirani vrednosti.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Obdelajte besedilo CSV z glavami stolpcev
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
