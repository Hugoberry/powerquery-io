---
title: Csv.Document
---

# Csv.Document


## Description

A CSV-dokumentum tartalmát adja vissza táblaként.


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

Táblaként adja vissza a CSV-dokumentum tartalmát.    <ul>      <li>        A(z) <code>columns</code> lehet null, az oszlopok száma, oszlopnevek listája, táblatípus vagy beállításrekord.      </li>      <li>        A(z) <code>delimiter</code> lehet egyetlen karakter, karakterek listája, vagy a <code>""</code> érték, amely azt jelzi, hogy a sorokat egymást követő térköz karakterekkel kell elválasztani. Alapértelmezett: <code>","</code>.      </li>      <li>        A(z) <code>extraValues</code> támogatott értékeit az <code>ExtraValues.Type</code> tartalmazza.      </li>      <li>        A(z) <code>encoding</code> határozza meg a szöveg kódolási típusát.      </li>    </ul>    Ha a(z) <code>columns</code> rendelkezik meghatározott rekorddal (és a(z) <code>delimiter</code>, <code>extraValues</code>, illetve <code>encoding</code> értéke null), akkor a következő rekordmezők lehetnek megadva:    <ul>      <li>        <code>Elválasztó karakter</code>: Az oszlop elválasztó karaktere. Alapértelmezett: <code>","</code>.      </li>      <li>        <code>Oszlopok</code>: Lehet null, az oszlopok száma, oszlopnevek listája vagy táblatípus. Ha az oszlopok száma alacsonyabb, mint a bemenetben szereplő szám, a további oszlopok nem lesznek figyelembe véve. Ha az oszlopok száma magasabb, mint a bemenetben szereplő szám, a további oszlopok értéke null lesz. Ha nincs megadva, az oszlopok számát a bemenet tartalma határozza meg.      </li>      <li>        <code>Kódolás</code>: A fájl szövegkódolása. Alapértelmezett: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Az idézőjelek kezelésének módját adja meg.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (alapértelmezett): A mezőkben lévő idézőjelek csak akkor számítanak, ha közvetlenül egy elválasztó karakter után állnak.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: A mezőkben lévő idézőjelek mindig számítanak, a helyüktől függetlenül.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Az idézőjelek között álló szóközök kezelésének módját adja meg.        <ul>          <li>            <code>QuoteStyle.None</code> (alapértelmezett): A rendszer minden sortörést az aktuális sor végeként kezel, még akkor is, ha idézőjelek között álló értékben szerepel.          </li>          <li>            <code>QuoteStyle.Csv</code>: A rendszer az idézőjelek között álló sortöréseket az adatok részeként kezeli, nem pedig az aktuális sor végeként.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
CSV-szöveg feldolgozása oszlopfejlécek nélkül
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
