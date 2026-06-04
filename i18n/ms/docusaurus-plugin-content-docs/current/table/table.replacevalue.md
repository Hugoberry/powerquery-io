---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Menggantikan satu nilai dengan yang lain dalam lajur yang ditentukan.


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

Menggantikan nilai dengan nilai baharu dalam lajur jadual yang ditentukan.

-   `table`: Jadual untuk dicari.
-   `oldValue`: Nilai yang akan digantikan.
-   `newValue`: Nilai gantian.
-   `replacer`: Fungsi pengganti untuk digunakan. Fungsi ini boleh sama ada `Replacer.ReplaceText` untuk menggantikan teks asal dengan teks baharu, `Replacer.ReplaceValue` untuk menggantikan nilai asal dengan nilai baharu, atau pengganti tersuai.
-   `columnsToSearch`: Senarai yang mengandungi lajur atau lajur tertentu dalam jadual untuk mencari nilai yang akan digantikan.


## Examples

### Example #1
Gantikan teks "goodbye" dengan "world" dalam lajur B, sepadan dengan keseluruhan nilai sahaja.
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
Gantikan teks "ur" dengan "atau" dalam lajur B, yang sepadan dengan mana-mana bahagian nilai.
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
Tanpa namakan nama pekerja AS.
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
Tanpa namakan semua lajur pekerja AS.
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
