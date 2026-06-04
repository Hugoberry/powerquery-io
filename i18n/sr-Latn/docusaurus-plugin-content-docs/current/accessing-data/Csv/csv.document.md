---
title: Csv.Document
---

# Csv.Document


Vraća sadržaj CSV dokumenta u vidu tabele.


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

Vraća sadržaj CSV dokumenta u vidu tabele.

-   `columns` može biti bez vrednosti, broj kolona, lista naziva kolona, tip tabele ili zapis opcija.
-   `delimiter` može da bude jedan znak, lista znakova ili vrednost `„“`, što ukazuje na to da redove treba podeliti uzastopnim znakovima razmaka. Podrazumevano: `„,“`.
-   Pogledajte `ExtraValues.Type` za podržane vrednosti od `extraValues`.
-   `encoding` navodi tip kodiranja teksta.

Ako je zapis naveden za `columns` (a `delimiter`, `extraValues`, i `encoding` su bez vrednosti), mogu se navesti sledeća polja zapisa:

-   `Delimiter`: Znak za razgraničavanje kolone sa jednim znakom. Podrazumevano: `„,“`.
-   `Columns`: Može biti bez vrednosti, broj kolona, lista naziva kolona ili tip tabele. Ako je broj kolona manji od broja pronađenog u unosu, dodatne kolone će biti zanemarene. Ako je broj kolona veći od broja pronađenog u unosu, dodatne kolone će biti bez vrednosti. Kada nije navedeno, broj kolona će biti određen onim što se nalazi u unosu.
-   `Encoding`:Kodiranje teksta datoteke. Podrazumevano: 65001 (UTF-8).
-   `CsvStyle`: Određuje kako se postupa sa navodnicima.
    -   `CsvStyle.QuoteAfterDelimiter` (podrazumevano): Navodnici u polju imaju značaj samo ako stoje odmah iza znaka za razgraničavanje.
    -   `CsvStyle.QuoteAlways`Navodnici u polju uvek imaju značaj bez obzira na to gde se pojavljuju.
-   `QuoteStyle`: Navodi kako se obrađuju prelomi redova unutar navodnika.
    -   `QuoteStyle.Csv` (podrazumevano): Prelomi redova unutar navodnika se tretiraju kao deo podataka, a ne kao kraj trenutnog reda.
    -   `QuoteStyle.None`: Svi prelomi redova se tretiraju kao kraj trenutnog reda, čak i kada se javljaju unutar vrednosti pod navodnicima.
-   `IncludeByteOrderMark`: Logička vrednost koja pokazuje da li treba uključiti oznaku reda bajtova (BOM) na početku CSV izlaza. Kada je podešeno na vrednost true, BOM se upisuje (na primer, UTF-8 BOM: `0xEF 0xBB 0xBF`); kada je postavljeno na false, BOM nije uključen. Ova opcija je primenljiva samo u izlaznim scenarijima. Podrazumevana vrednost je „`false`“.
-   `ExtraValues`: Pogledajte `ExtraValues.Type` za podržane vrednosti za ExtraValues.


## Examples

### Example #1
Obradite CSV tekst pomoću zaglavlja kolona.
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
