---
title: Csv.Document
---

# Csv.Document


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


## Remarks

A CSV-dokumentum tartalmát adja vissza táblaként.

-   A(z) `columns` lehet null, az oszlopok száma, oszlopnevek listája, táblatípus vagy beállításrekord.
-   A(z) `delimiter` lehet egyetlen karakter, karakterlista vagy a `""` érték, amely azt jelzi, hogy a sorokat egymást követő szóközkarakterekkel kell felosztani. Alapértelmezett: `","`.
-   A(z) `extraValues` támogatott értékeiért lásd: `ExtraValues.Type`.
-   A(z) `encoding` meghatározza a szövegkódolás típusát.

Ha meg van adva egy rekord a(z) `columns` elemhez (és a(z) `delimiter`, `extraValues` és `encoding` null), a következő rekordmezők adhatók meg:

-   `Elválasztó karakter`: Egy karakterből álló oszlopelválasztó. Alapértelmezett: `","`.
-   `Oszlopok`: Lehet null, az oszlopok száma, oszlopnevek listája vagy táblatípus. Ha az oszlopok száma alacsonyabb, mint a bemenetben szereplő szám, a további oszlopok nem lesznek figyelembe véve. Ha az oszlopok száma magasabb, mint a bemenetben szereplő szám, a további oszlopok értéke null lesz. Ha nincs megadva, az oszlopok számát a bemenet tartalma határozza meg.
-   `Kódolás`: A fájl szövegkódolása. Alapértelmezett: 65001 (UTF-8).
-   `CsvStyle`: Az idézőjelek kezelésének módját adja meg.
    -   `CsvStyle.QuoteAfterDelimiter` (alapértelmezett): A mezőkben lévő idézőjelek csak akkor számítanak, ha közvetlenül egy elválasztó karakter után állnak.
    -   `CsvStyle.QuoteAlways`: A mezőkben szereplő idézőjeleket a program mindig figyelembe veszi, függetlenül attól, hogy hol szerepelnek.
-   `QuoteStyle`: Az idézőjelek között álló szóközök kezelésének módját adja meg.
    -   `QuoteStyle.Csv` (default): A rendszer az idézőjelek között álló sortöréseket az adatok részeként kezeli, nem pedig az aktuális sor végeként.
    -   `QuoteStyle.None`: A rendszer minden sortörést az aktuális sor végeként kezel, még akkor is, ha idézőjelek között álló értékben szerepel.
-   `IncludeByteOrderMark`: Logikai érték, amely azt jelzi, hogy szerepeljen-e bájtsorrendjelző (BOM) a CSV-kimenet elején. Ha igaz értékre van állítva, a BOM ki lesz írva (például UTF-8 BOM: `0xEF 0xBB 0xBF`); ha hamis értékre van állítva, a rendszer nem szerepelteti a BOM-ot. Ez a beállítás csak kimeneti használati esetek esetén érvényes. Az alapértelmezett érték a `false`.
-   `ExtraValues`: Az ExtraValues támogatott értékeiért lásd: `ExtraValues.Type`.


## Examples

### Example #1
CSV-szöveg feldolgozása oszlopfejlécek nélkül.
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
