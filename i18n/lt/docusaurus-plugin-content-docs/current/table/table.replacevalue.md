---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Nurodytuose stulpeliuose viena reikšmė pakeičiama kita.


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

Nurodytuose lentelės stulpeliuose pakeičia reikšmę nauja reikšme.

-   `table`: lentelė, kurioje ieškoma.
-   `oldValue`: reikšmė, kurią reikia pakeisti.
-   `newValue`: pakeitimo reikšmė.
-   `replacer`: naudojama pakeitimo funkcija. Funkcija gali būti `Replacer.ReplaceText`, kad pradinį tekstą pakeistumėte nauju tekstu, `Replacer.ReplaceValue`, kad pradinę reikšmę pakeistumėte nauja, arba pasirinktumėte pakeitimo funkciją.
-   `columnsToSearch`: sąrašas, kuriame nurodytas konkretus stulpelis arba stulpeliai lentelėje, kuriame ieškoma reikšmės, kurią reikia pakeisti.


## Examples

### Example #1
B stulpelyje tekstą „goodbye“ pakeiskite į „world“, atitinkantį tik visą reikšmę.
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
B stulpelyje tekstą „ur“ pakeiskite į „or“, atitinkantį bet kurią reikšmės dalį.
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
Anonimizuoti JAV darbuotojų vardus ir pavardes.
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
Anonimizuoti visus JAV darbuotojų stulpelius.
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
