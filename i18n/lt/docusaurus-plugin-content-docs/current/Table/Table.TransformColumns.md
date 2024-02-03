---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformuojamos vieno ar kelių stulpelių reikšmės.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Transformuoja <code>table</code> pritaikant kiekvieną stulpelio operaciją, nurodytą <code>transformOperations</code> (kur formatas yra \{ column name, transformation } arba \{ column name, transformation, new column type }).    Jei nurodyta <code>defaultTransformation</code>, ji bus taikoma visiems stulpeliams, nenurodytiems <code>transformOperations</code>.    Jei <code>transformOperations</code> nurodyto stulpelio nėra, pateikiama išimtis, nebent pasirenkamas parametras <code>missingField</code> nurodo alternatyvą (pvz., <code>MissingField.UseNull</code> arba <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Konvertuokite tekstines reikšmes, esančias stulpelyje [A], į skaitines reikšmes, o stulpelyje [B] esančias skaitines reikšmes – į tekstines.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Konvertuokite trūkstamo stulpelio [X] reikšmių skaičių į tekstines reikšmes, ignoruodami stulpelius, kurie neegzistuoja.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Konvertuokite trūkstamo stulpelio [X] reikšmių skaičių į tekstines reikšmes, pagal numatytuosius parametrus pažymėdami kaip neapibrėžtas stulpeliuose, kurie neegzistuoja.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Padidinkite stulpelio [B] skaitines reikšmes ir konvertuokite jas į tekstines reikšmes bei konvertuokite visus kitus stulpelius į skaičius.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
