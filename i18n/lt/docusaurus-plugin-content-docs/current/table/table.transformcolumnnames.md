---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Stulpelių pavadinimai transformuojami naudojant nurodytą funkciją.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Stulpelių pavadinimai transformuojami naudojant nurodytą funkciją `nameGenerator`. Tinkamos parinktys:

`MaxLength`: didžiausias naujų stulpelių pavadinimų ilgis. Jei naudojant nurodytą funkciją gaunamas ilgesnis stulpelio pavadinimas, šio ilgo pavadinimo pradžia / pabaiga bus pakoreguota.

`Comparer` naudojama palyginimui valdyti, kai generuojami naujų stulpelių pavadinimai. Gali būti naudojamos lyginimo funkcijos, norint pateikti didžiųjų ir mažųjų raidžių neskiriančius arba į kultūrą ir lokalę atsižvelgiančius palyginimus.

Formulių kalba pateikiamos šios įtaisytosios lyginimo funkcijos:

-   `Comparer.Ordinal`: naudojama norint vykdyti tikslų eilės tvarka palyginimą
-   `Comparer.OrdinalIgnoreCase`: naudojama norint vykdyti tikslų eilės tvarka didžiųjų ir mažųjų raidžių neskiriantį palyginimą
-   `Comparer.FromCulture`: naudojama norint vykdyti į kultūrą atsižvelgiantį palyginimą


## Examples

### Example #1
Stulpelių pavadinimuose šalinti simbolį `#(tab)`
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Pakeiskite stulpelių pavadinimus, kad būtų neskiriant didžiųjų ir mažųjų raidžių sugeneruoti 6 simbolių ilgio pavadinimai.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
