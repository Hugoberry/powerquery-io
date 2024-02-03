---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

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


## Details

Sujungiamos <code>table1</code> eilutės su <code>table2</code> eilutėmis, atsižvelgiant į raktų stulpelių, pasirinktų <code>key1</code> (<code>table1</code>) ir <code>key2</code> (<code>table2</code>), reikšmių lygiateisiškumą. Rezultatai įvedami į stulpelį, kurio pavadinimas <code>newColumnName</code>.<br />Pasirenkama parinktis <code>joinKind</code> nurodo sujungimo, kurį reikia atlikti, rūšį. Pagal numatytuosius parametrus, jei nenurodyta <code>joinKind</code>, atliekamas kairysis išorinis sujungimas.<br />Galima nurodyti pasirenkamą <code>keyEqualityComparers</code> rinkinį siekiant nurodyti, kaip palyginti raktų stulpelius. Šiuo metu ši funkcija skirta naudoti tik įmonės viduje.<br />  


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
