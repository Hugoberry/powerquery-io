---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Viena vērtība tiek aizstāta ar citu vērtību norādītajās kolonnās.


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

Aizstāj vērtību ar jaunu vērtību norādītajās tabulas kolonnās.

-   `table`: tabula, kurā meklēt.
-   `oldValue`: aizstājamā vērtība.
-   `newValue`: aizstāšanas vērtība.
-   `replacer`: izmantojamā aizstāšanas funkcija. Funkcija var būt `Replacer.ReplaceText`, lai aizstātu sākotnējo tekstu ar jaunu tekstu, `Replacer.ReplaceValue`, lai aizstātu sākotnējo vērtību ar jaunu vērtību, vai pielāgota aizstāšanas funkcija.
-   `columnsToSearch`: saraksts ar konkrētu kolonnu vai kolonnām tabulā, kurā meklēt aizstājamās vērtības.


## Examples

### Example #1
B kolonnā aizstājiet tekstu "uz redzēšanos" ar "pasaule", kas atbilst tikai visai vērtībai.
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
B kolonnā aizstājiet tekstu "ur" ar "vai", kas atbilst jebkurai vērtības daļai.
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
Anonimizējiet ASV darbinieku vārdus.
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
Anonimizējiet visas ASV darbinieku kolonnas.
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
