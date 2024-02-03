---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformuje hodnoty jedného alebo viacerých stĺpcov.


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

Transformuje <code>table</code> tým, že použije každú operáciu stĺpca uvedenú na mieste <code>transformOperations</code> (pričom formát je \{ column name, transformation } alebo \{ column name, transformation, new column type }).    Ak je hodnota <code>defaultTransformation</code> uvedená, použije sa na všetky stĺpce neuvedené na mieste <code>transformOperations</code>.    Ak stĺpec uvedený na mieste <code>transformOperations</code> neexistuje, vygeneruje sa výnimka, pokiaľ voliteľný parameter <code>missingField</code> neuvádza alternatívu (napríklad <code>MissingField.UseNull</code> alebo <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Skonvertuje textové hodnoty v stĺpci [A] na číselné hodnoty a číselné hodnoty v stĺpci [B] na textové hodnoty.
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
Konvertujte číselné hodnoty v chýbajúcom stĺpci [X] na textové hodnoty, pričom ignorujte stĺpce, ktoré neexistujú.
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
Skonvertujte číselné hodnoty v chýbajúcom stĺpci [X] na textové hodnoty, pričom pre stĺpce, ktoré neexistujú, nastavte predvolenú hodnotu null.
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
Zvýšte číselné hodnoty v stĺpci [B] a skonvertujte ich na textové hodnoty. Všetky ostatné stĺpce skonvertujte na čísla.
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
