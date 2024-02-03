---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Pārveido vienas vai vairāku kolonnu vērtības.


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

Pārveido <code>table</code>, lietojot katru <code>transformOperations</code> norādīto kolonnas operāciju (kur formāts ir \{ column name, transformation } vai \{ column name, transformation, new column type }).    Ja <code>defaultTransformation</code> ir norādīts, tas tiks lietots visām kolonnām, kas nav uzskaitītas <code>transformOperations</code>.    Ja <code>transformOperations</code> norādītā kolonna nepastāv, tiek aktivizēts izņēmums, izņemot gadījumus, kad neobligātais parametrs <code>missingField</code> norāda alternatīvu (piemēram, <code>MissingField.UseNull</code> vai <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Pārvērtiet kolonnas [A] teksta vērtības par skaitliskajām vērtībām un kolonnas [B] skaitliskās vērtības par teksta vērtībām.
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
Pārvērtiet trūkstošās kolonnas [X] skaitliskās vērtības par teksta vērtībām, ignorējot neesošās kolonnas.
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
Pārvērst trūkstošās kolonnas [X] skaitliskās vērtības par teksta vērtībām, neesošajām kolonnām pēc noklusējuma lietojot vērtību Null.
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
Palielināt kolonnas [B] skaitliskās vērtības un pārvērst tās par teksta vērtībām, kā arī visas pārējās kolonnas pārvērst par skaitļiem.
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
