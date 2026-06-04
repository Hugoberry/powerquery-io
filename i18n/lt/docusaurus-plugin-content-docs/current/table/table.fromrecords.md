---
title: Table.FromRecords
---

# Table.FromRecords


Įrašų sąrašas konvertuojamas į lentelę.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Nurodytą įrašų sąrašą konvertuoja į lentelę.

-   `records`: įrašų, kuriuos reikia konvertuoti į lentelę, sąrašas.
-   `columns`: (pasirinktinai) lentelės stulpelių pavadinimų sąrašas arba lentelės tipas.
-   `missingField`: (pasirinktinai) nurodo, kaip tvarkyti trūkstamus laukus eilutėje. Naudokite vieną iš šių reikšmių:
    -   `MissingField.Error`: bet kurie trūkstami laukai sukelia klaidą (numatytoji reikšmė).
    -   `MissingField.UseNull`: visi trūkstami laukai įtraukiami kaip `null` reikšmės.
      
    Naudojant `MissingField.Ignore` šiame parametre sukeliama klaida.


## Examples

### Example #1
Sukurkite lentelę iš įrašų, naudodami įrašo lauko pavadinimus kaip stulpelio pavadinimus.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Sukurkite lentelę iš įrašų su įvestais stulpeliais ir pasirinkite stulpelių skaičių.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Sukurkite lentelę, kurioje būtų klientų iš nurodytų įrašų vardas, antro vardo inicialas ir pavardė. Jei trūksta kurios nors reikšmės, pakeiskite ją `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
