---
title: Table.ReplaceValue
---

# Table.ReplaceValue


## Description

Replaces one value with another in the specified columns.


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


## Details

Replaces <code>oldValue</code> with <code>newValue</code> in the specified columns of the <code>table</code>.


## Examples

### Example #1 
Replace the text &#34;goodbye&#34; with &#34;world&#34; in column B, matching only the entire value.
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
Replace the text &#34;ur&#34; with &#34;or&#34; in column B, matching any part of the value.
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
Anonymize the names of US employees.
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
Anonymize all columns of US employees.
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
