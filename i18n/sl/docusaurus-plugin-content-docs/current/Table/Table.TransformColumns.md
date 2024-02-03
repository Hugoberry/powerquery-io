---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Preoblikuje vrednosti enega ali več stolpcev.


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

Preoblikuje <code>table</code> tako, da uporabi postopek posameznega stolpca, navedenega v <code>transformOperations</code> (oblika zapisa je \{ column name, transformation } ali \{ column name, transformation, new column type }).    Če je določen element <code>defaultTransformation</code>, je ta uporabljen za vse stolpce, ki niso navedeni v <code>transformOperations</code>.    Če stolpec, ki je naveden v <code>transformOperations</code>, ne obstaja, je ustvarjena izjema, razen če izbirni parameter <code>missingField</code> določa nadomestno vrednost (na primer <code>MissingField.UseNull</code> ali <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Pretvorite besedilne vrednosti v stolpcu [A] v številske vrednosti, številske vrednosti v stolpcu [B] pa v besedilne vrednosti.
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
Pretvorite številske vrednosti v manjkajočem stolpcu [X] v besedilne vrednosti in pri tem prezrite stolpce, ki ne obstajajo.
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
Pretvorite številske vrednosti v manjkajočem stolpcu [X] v besedilne vrednosti in pri tem privzeto prikažite vrednost &#34;null&#34; za stolpce, ki ne obstajajo.
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
Povečajte številske vrednosti v stolpcu [B] in jih pretvorite v besedilne vrednosti, vse druge stolpce pa pretvorite v številke.
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
