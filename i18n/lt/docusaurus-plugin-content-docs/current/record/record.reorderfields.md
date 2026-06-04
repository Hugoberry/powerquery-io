---
title: Record.ReorderFields
---

# Record.ReorderFields


Pertvarkomi įrašo laukai, kad jie atitiktų laukų pavadinimų sąrašo tvarką.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Pertvarkomi įrašo laukai, kad jie atitiktų laukų pavadinimų sąrašo tvarką.

-   `record`: įrašas, kuriame yra pertvarkytini laukai.
-   `fieldOrder`: sąrašas, kuriame yra nauja įrašui taikytinų laukų tvarka. Laukų reikšmės išlaikomos, o laukai, nenurodyti šiame parametre, paliekami jų pradinėse padėtyse.
-   `missingField`: nurodomas numatytas veiksmas, kuris taikomas, kai eilutėje, kurioje yra mažiau laukų, nei tikėtasi, trūksta reikšmių. Šios reikšmės yra tinkamos:
    -   `MissingField.Error`: (numatytoji) nurodoma, kad trūkstami laukai turėtų lemti klaidą. Jei `missingField` parametro reikšmė neįvesta, naudojama ši reikšmė.
    -   `MissingField.Ignore`: nurodoma, kad trūkstamų laukų reikia nepaisyti.
    -   `MissingField.UseNull`: nurodoma, kad trūkstamus laukus reikia įtraukti kaip `null` reikšmes.


## Examples

### Example #1
Pertvarkykite kai kuriuos laukus įraše.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Pertvarkykite kai kuriuos įrašo laukus ir įtraukite reikšmę `null` visuose trūkstamuose laukuose.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
