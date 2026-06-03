---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Zamienia jedną wartość na inną w określonych kolumnach.


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

Zamienia wartość na nową wartość w określonych kolumnach tabeli.

-   `table`: tabela do przeszukania.
-   `oldValue`: wartość do zastąpienia.
-   `newValue`: wartość zastępcza.
-   `replacer`: funkcja zamiennika do użycia. Funkcją może być `Replacer.ReplaceText` w celu zastąpienia oryginalnego tekstu nowym tekstem, `Replacer.ReplaceValue` w celu zastąpienia oryginalnej wartości nową wartością lub niestandardowym zamiennikiem.
-   `columnsToSearch`: lista zawierająca określoną kolumnę lub kolumny w tabeli do wyszukania wartości do zastąpienia.


## Examples

### Example #1
Zamień tekst „do widzenia” na „świat” w kolumnie B, dopasowując tylko całą wartość.
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
Zamień tekst „ur” na „lub” w kolumnie B, dopasowując dowolną część wartości.
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
Anonimizuj imiona i nazwiska pracowników w Stanach Zjednoczonych.
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
Anonimizuj wszystkie kolumny pracowników w Stanach Zjednoczonych.
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
