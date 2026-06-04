---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Замінює одне значення на інше у вказаних стовпцях.


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

Замінює значення на нове у вказаних стовпцях таблиці.

-   `table`: таблиця для пошуку.
-   `oldValue`: значення, яке потрібно замінити.
-   `newValue`: значення заміни.
-   `replacer`: Функція заміни, яку потрібно використати. Функцією може бути `Replacer.ReplaceText` для заміни оригінального тексту на новий текст, `Replacer.ReplaceValue` для заміни оригінального значення на нове, або власна функція заміни.
-   `columnsToSearch`: Список, що містить конкретний стовпець або стовпці в таблиці, де потрібно шукати значення для заміни.


## Examples

### Example #1
Замінити у стовпці B текст "goodbye", що відповідає лише значенню цілком, на "world".
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
Замінити у стовпці B текст "goodbye", що відповідає будь-якій частині значення, на "world".
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
Анонімізувати імена співробітників у США.
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
Анонімізувати всі стовпці співробітників у США.
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
