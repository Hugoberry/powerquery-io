---
title: Table.NestedJoin
---

# Table.NestedJoin


Sujungiami pateikti lentelių stulpeliai, sujungimo rezultatas pateikiamas naujame stulpelyje.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Sujungiamos `table1` eilutės su `table2` eilutėmis, atsižvelgiant į raktų stulpelių, pasirinktų `key1` (`table1`) ir `key2` (`table2`), reikšmių lygiateisiškumą. Rezultatai įvedami į stulpelį, kurio pavadinimas `newColumnName`.

Pasirenkama parinktis `joinKind` nurodo sujungimo, kurį reikia atlikti, rūšį. Pagal numatytuosius parametrus, jei nenurodyta `joinKind`, atliekamas kairysis išorinis sujungimas.

Galima nurodyti pasirenkamą `keyEqualityComparers` rinkinį siekiant nurodyti, kaip palyginti raktų stulpelius. Šiuo metu ši funkcija skirta naudoti tik įmonės viduje.


## Examples

### Example #1
Sujunkite dvi lenteles naudodami vieną rakto stulpelį.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
