---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Sostituisce un valore con un altro nelle colonne specificate.


## Syntax

```powerquery
Table.ReplaceValue(
    table as table,
    oldValue as any,
    newValue as any,
    replacer as function,
    columnsToSearch as list
) as table
```


## Remarks

Sostituisce un valore con un nuovo valore nelle colonne specificate di una tabella.

-   `table`: tabella in cui eseguire la ricerca.
-   `oldValue`: valore da sostituire.
-   `newValue`: valore sostitutivo.
-   `replacer`: funzione di sostituzione da usare. La funzione può essere `Replacer.ReplaceText` per sostituire il testo originale con un nuovo testo, `Replacer.ReplaceValue` per sostituire il valore originale con un nuovo valore, oppure un valore sostitutivo personalizzato.
-   `columnsToSearch`: elenco contenente la colonna o le colonne specifiche della tabella in cui cercare il valore da sostituire.


## Examples

### Example #1
Sostituire il testo "goodbye" con "world" nella colonna B, con corrispondenza solo per il valore intero.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "goodbye"],
        [A = 3, B = "goodbyes"]
    }),
    "goodbye",
    "world",
    Replacer.ReplaceValue,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"],
    [A = 3, B = "goodbyes"]
})
```


### Example #2
Sostituire il testo "ur" con "or" nella colonna B, con corrispondenza per qualsiasi parte del valore.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "wurld"]
    }),
    "ur",
    "or",
    Replacer.ReplaceText,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"]
})
```


### Example #3
Rendi anonimi i nomi dei dipendenti degli Stati Uniti.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each if [Country] = "US" then [Name] else false,
    each Text.Repeat("*", Text.Length([Name])),
    Replacer.ReplaceValue,
    {"Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "*****", Country = "US"],
    [Name = "Bob", Country = "CA"]
})
```


### Example #4
Rendi anonime tutte le colonne dei dipendenti degli Stati Uniti.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each [Country] = "US",
    "?",
    (currentValue, isUS, replacementValue) =>
        if isUS then
            Text.Repeat(replacementValue, Text.Length(currentValue))
        else
            currentValue,
    {"Name", "Country"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "?????", Country = "??"],
    [Name = "Bob", Country = "CA"]
})
```




## Category
Table.Transformation
