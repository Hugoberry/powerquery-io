---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Stulpelių pavadinimai transformuojami naudojant nurodytą funkciją.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Stulpelių pavadinimai transformuojami naudojant nurodytą funkciją <code>nameGenerator</code>. Tinkamos parinktys:    <div>      <code>MaxLength</code>: didžiausias naujų stulpelių pavadinimų ilgis. Jei naudojant nurodytą funkciją gaunamas ilgesnis stulpelio pavadinimas, šio ilgo pavadinimo pradžia / pabaiga bus pakoreguota.    </div>    <div>      <code>Comparer</code> naudojama palyginimui valdyti, kai generuojami naujų stulpelių pavadinimai. Gali būti naudojamos lyginimo funkcijos, norint pateikti didžiųjų ir mažųjų raidžių neskiriančius arba į kultūrą ir lokalę atsižvelgiančius palyginimus.    </div>    <div>      Formulių kalba pateikiamos šios įtaisytosios lyginimo funkcijos:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: naudojama norint vykdyti tikslų eilės tvarka palyginimą</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: naudojama norint vykdyti tikslų eilės tvarka didžiųjų ir mažųjų raidžių neskiriantį palyginimą</li>      <li> <code>Comparer.FromCulture</code>: naudojama norint vykdyti į kultūrą atsižvelgiantį palyginimą</li>    </ul>    


## Examples

### Example #1 
Stulpelių pavadinimuose šalinti simbolį &lt;code&gt;#(tab)&lt;/code&gt;
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
