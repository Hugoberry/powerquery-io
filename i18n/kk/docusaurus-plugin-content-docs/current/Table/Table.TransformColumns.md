---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Бір немесе бірнеше бағанның мәндерін түрлендіреді.


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

<code>table</code> тізімінде көрсетілген әрбір баған әрекетін қолдану арқылы <code>transformOperations</code> түрлендіреді (мұнда пішім: \{ column name, transformation } немесе \{ column name, transformation, new column type }).    Егер <code>defaultTransformation</code> көрсетілсе, ол <code>transformOperations</code> тізімінде жоқ барлық бағандарға қолданылады.    Егер <code>transformOperations</code> тізімінде көрсетілген баған болмаса, <code>missingField</code> қосымша параметрі баламаны көрсетпесе (мысалы, <code>MissingField.UseNull</code> немесе <code>MissingField.Ignore</code>) ерекшелік шығарылады.


## Examples

### Example #1 
[A] бағанындағы мәтіндік мәндерді сандық мәнге және [B] бағанындағы сандық мәндерді мәтінге түрлендіріңіз.
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
Жоқ бағандарды елемей, жоқ [X] бағанындағы сандық мәндерді мәтіндік мәндерге түрлендіріңіз.
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
Жоқ [X] бағанындағы сандық мәндерді мәтіндік мәндерге түрлендіріңіз, жоқ бағандарда &#34;null&#34; мәні болады.
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
[B] бағанындағы сандық мәндерді көбейтіп, оларды мәтіндік мәндерге түрлендіріңіз, ал барлық басқа бағанды сандарға түрлендіріңіз.
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
