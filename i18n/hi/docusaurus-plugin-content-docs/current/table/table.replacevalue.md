---
title: Table.ReplaceValue
---

# Table.ReplaceValue


निर्दिष्ट स्तंभों में एक मान को दूसरे से बदलता है.


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

तालिका के निर्दिष्ट कॉलम में मान को नए मान से बदलता है.

-   `table`: खोजने के लिए तालिका.
-   `oldValue`: बदला जाने वाला मान.
-   `newValue`: प्रतिस्थापन मान.
-   `replacer`: उपयोग करने के लिए रिप्लेसर फ़ंक्शन. फ़ंक्शन या तो `Replacer.ReplaceText` हो सकता है जो मूल टेक्स्ट को नए टेक्स्ट से बदल देता है, `Replacer.ReplaceValue` जो मूल मान को नए मान से बदल देता है, या एक कस्टम रिप्लेसर हो सकता है.
-   `columnsToSearch`: बदलें जाने वाले मान की खोज करने के लिए तालिका में विशिष्ट कॉलम या कॉलम्स वाली सूची.


## Examples

### Example #1
स्तंभ B में पाठ "गुडबाय" को "world" से बदलें, जो केवल संपूर्ण मान से मेल खाता है.
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
मान के किसी भी भाग से मेल खाते हुए, स्तंभ B में पाठ "ur" को "or" से बदलें.
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
अमेरिकी कर्मचारियों के नाम अनामीकृत करें.
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
अमेरिकी कर्मचारियों के सभी स्तंभों को अनामीकृत करें.
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
