---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

निर्दिष्ट स्‍तंभों में त्रुटि मानों को संबंधित निर्दिष्ट मान से बदलता है.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

<code>table</code> के निर्दिष्ट स्‍तंभों में त्रुटि मानों को <code>errorReplacement</code> सूची में नए मानों से बदलता है. सूची का फ़ॉर्मेट \{\{column1, value1}, …} है. इसमें प्रति स्‍तंभ केवल एक ही प्रतिस्‍थापन मान हो सकता है, स्‍तंभ को एक से अधिक बार निर्दिष्ट करने से त्रुटि आ सकती है.


## Examples

### Example #1 
तालिका में त्रुटि मान को पाठ &#34;world&#34; से बदलें.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
तालिका में स्‍तंभ A में त्रुटि मान को पाठ &#34;hello&#34; से बदलें और स्‍तंभ B में पाठ &#34;world&#34; से बदलें.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
