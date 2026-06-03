---
title: Table.SplitColumn
---

# Table.SplitColumn


निर्दिष्ट विभाजक फ़ंक्शन का उपयोग करके निर्दिष्ट कॉलम को अतिरिक्त स्तंभों के एक सेट में विभाजित करता है.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

निर्दिष्ट विभाजक फ़ंक्शन का उपयोग करके निर्दिष्ट कॉलम को अतिरिक्त कॉलम के एक सेट में विभाजित करता है.

-   `table`: वह तालिका जिसमें विभाजित करने वाला कॉलम शामिल है.
-   `sourceColumn`: विभाजित किए जाने वाले कॉलम का नाम.
-   `splitter`: कॉलम को विभाजित करने के लिए उपयोग किया जाने वाला विभाजक फ़ंक्शन (उदाहरण के लिए, `Splitter.SplitTextByDelimiter` या `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: या तो बनाए जाने वाले नए कॉलम नामों की एक सूची, या नए कॉलम की संख्या.
-   `default`: : उस मान को ओवरराइड करता है जिसका उपयोग तब किया जाता है, जब सभी नए कॉलम को भरने के लिए पर्याप्त विभाजित मान उपलब्ध नहीं होते हैं. इस पैरामीटर के लिए डिफ़ॉल्ट मान `नल` है.
-   `extraColumns`: निर्दिष्ट करता है कि यदि नए कॉलम की संख्या से अधिक विभाजित मान हों तो क्या करें. आप इस पैरामीटर पर `ExtraValues.Type` प्रगणना मान पास कर सकते हैं. डिफ़ॉल्ट `ExtraValues.Ignore` है.


## Examples

### Example #1
नाम स्तंभ को प्रथम नाम और अंतिम नाम में विभाजित करें.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
नाम स्तंभ को प्रथम नाम और अंतिम नाम में विभाजित करें, फिर नए स्तंभों के नाम बदलें.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
नाम स्तंभ को प्रथम नाम और अंतिम नाम में विभाजित करें, नए स्तंभों के नाम बदलें, और किसी भी रिक्ति को "-कोई प्रविष्टि नहीं-" के साथ भरें.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
नाम स्तंभ को प्रथम नाम और अंतिम नाम में विभाजित करें, फिर नए स्तंभों के नाम बदलें. चूँकि उपलब्ध स्तंभों की संख्या से मान अधिक हो सकते हैं, इसलिए अंतिम नाम स्तंभ को एक सूची के रूप में बनाएँ जिसमें प्रथम नाम के बाद के सभी मान शामिल हों.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
