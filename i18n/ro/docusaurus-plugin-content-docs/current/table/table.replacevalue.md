---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Înlocuieşte o valoare cu altă valoare în coloanele specificate.


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

Înlocuiește o valoare cu o valoare nouă în coloanele specificate ale unui tabel.

-   `table`: tabelul de căutat.
-   `oldValue`: valoarea de înlocuit.
-   `newValue`: valoarea cu care se înlocuiește.
-   `replacer`: funcția de înlocuire de utilizat. Funcția poate fi `Replacer.ReplaceText` pentru a înlocui textul original cu un text nou, `Replacer.ReplaceValue` pentru a înlocui valoarea originală cu o valoare nouă sau un înlocuitor personalizat.
-   `columnsToSearch`: o listă care conține coloana sau coloanele specifice din tabel în care se caută valoarea de înlocuit.


## Examples

### Example #1
Înlocuiți textul „la revedere” cu „lume” din coloana B, potrivind doar valoarea întreagă.
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
Înlocuiți textul „sa” cu „sau” în coloana B, potrivind oricare parte a valorii.
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
Anonimizați numele angajaților din Statele Unite.
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
Anonimizați toate coloanele angajaților din Statele Unite.
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
