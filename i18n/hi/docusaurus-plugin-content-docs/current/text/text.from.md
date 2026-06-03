---
title: Text.From
---

# Text.From


दिए गए मान से एक पाठ मान बनाता है.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

निर्दिष्ट मान का टेक्स्ट प्रस्तुतिकरण लौटाता है.

-   `value`: टेक्स्ट में रूपांतरित किया जाने वाला मान. यह मान एक `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration`, या `binary` मान हो सकता है. अगर दिया गया मान `null` है, तो यह फ़ंक्शन `null` लौटाता है.
-   `culture`: (वैकल्पिक) मान को टेक्स्ट में बदलते समय उपयोग किया जाने वाला कल्चर (उदाहरण के लिए, "en-US").


## Examples

### Example #1
संख्या 3 से एक पाठ मान बनाएँ.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
निर्दिष्ट दिनांक और समय के समतुल्य पाठ प्राप्त करें.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
निर्दिष्ट दिनांक और समय के समतुल्य जर्मन पाठ प्राप्त करें.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
हेक्ज़ाडेसिमल के रूप में एन्कोड किए गए पाठ से बाइनरी मान प्राप्त करें और मान को वापस पाठ में परिवर्तित करें.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
फ़्रांस के लिए डेटा वाली तालिका की पंक्तियाँ प्राप्त करें और फ़्रेंच कल्चर का उपयोग करके दिनांकों को पाठ में रूपांतरित करें.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
