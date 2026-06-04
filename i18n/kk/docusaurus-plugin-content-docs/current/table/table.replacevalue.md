---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Көрсетілген бағандарды бір мәнді екіншісімен ауыстырады.


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

Кестенің көрсетілген бағандарындағы мәнді жаңа мәнмен алмастырады.

-   `table`: Іздеу орындалатын кесте.
-   `oldValue`: Ауыстырылатын мән.
-   `newValue`: Алмастыру мәні.
-   `replacer`: Қолданылатын ауыстыру функциясы. Функция түпнұсқа мәтінді жаңа мәтінмен ауыстыру үшін `Replacer.ReplaceText`, түпнұсқа мәнді жаңа мәнмен ауыстыру үшін `Replacer.ReplaceValue` немесе реттелетін алмастырғыш болуы мүмкін.
-   `columnsToSearch`: Ауыстырылатын мәнді іздеу үшін кестедегі арнайы бағандарды немесе бағандарды қамтитын тізім.


## Examples

### Example #1
Б бағанындағы тұтас мәніне ғана сәйкес келетін "goodbye" мәтінін "world" деген сөзбен ауыстырыңыз.
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
В бағанындағы мәннің кез келген бөлігіне сәйкес келетін "ur" мәтінін "or" деген сөзбен ауыстырыңыз.
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
АҚШ қызметкерлерінің аттарын анонимді ету.
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
АҚШ қызметкерлерінің барлық бағандарын анонимді ету.
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
