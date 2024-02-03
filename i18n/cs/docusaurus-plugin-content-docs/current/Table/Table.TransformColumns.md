---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformuje hodnoty jednoho nebo více sloupců.


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

Transformuje <code>table</code> použitím každé operace sloupce uvedené v <code>transformOperations</code> (ve formátu \{ název sloupce, transformace } nebo \{ název sloupce, transformace, nový typ sloupce }).    Pokud je zadána <code>defaultTransformation</code>, použije se pro všechny sloupce neuvedené v <code>transformOperations</code>.    Pokud sloupec uvedený v <code>transformOperations</code> neexistuje, vyvolá se výjimka, pokud volitelný parametr <code>missingField</code> neurčí alternativu (například <code>MissingField.UseNull</code> nebo <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Převeďte textové hodnoty ve sloupci [A] na číselné hodnoty a číselné hodnoty ve sloupci [B] na textové hodnoty.
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
Konvertuje číselné hodnoty chybějícího sloupce [X] na textové hodnoty a ignoruje sloupce, které neexistují.
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
Převede číselné hodnoty v chybějícím sloupci [X] na textové hodnoty, přičemž u neexistujících sloupců je výchozí hodnota nulová.
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
Zvyšte číselné hodnoty ve sloupci [B] a převeďte je na textové hodnoty a všechny ostatní sloupce převeďte na čísla.
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
