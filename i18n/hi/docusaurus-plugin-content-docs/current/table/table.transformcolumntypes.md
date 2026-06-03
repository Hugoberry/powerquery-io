---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


विशिष्ट कल्चर का उपयोग करके फ़ॉर्म \{ column, type \} का प्रकार ट्रांसफ़ॉर्मेशन लागू करता है.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

एक वैकल्पिक कल्चर का उपयोग करके, निर्दिष्ट कॉलमों पर ट्रांसफ़ॉर्म ऑपरेशन लागू करके एक तालिका लौटाता है.

-   `table`: रूपांतरित की जाने वाली इनपुट तालिका.
-   `typeTransformations`: लागू किए जाने वाले प्रकार रूपांतरण. एकल रूपांतरण के लिए फ़ॉर्मेट \{ column name, type value \} है. एक साथ एक से अधिक कॉलम के प्रकारों को बदलने के लिए, रूपांतरणों की एक सूची का उपयोग किया जा सकता है. अगर कोई कॉलम मौजूद नहीं है, तो एक त्रुटि सामने आती है.
-   `culture`: (वैकल्पिक) कॉलम प्रकारों को बदलते समय उपयोग किया जाने वाला कल्चर (उदाहरण के लिए "en-US"). अगर `culture` के लिए कोई रिकॉर्ड निर्दिष्ट किया गया है, तो उसमें निम्नलिखित फ़ील्ड शामिल हो सकते हैं:
    -   `कल्चर`: कॉलम के प्रकारों को रूपांतरित करते समय उपयोग किया जाने वाला कल्चर (उदाहरण के लिए, "en-US").
    -   `MissingField`: अगर कोई कॉलम मौजूद नहीं है, तो एक त्रुटि आती है, जब तक कि यह फ़ील्ड कोई दूसरा तरीका न दे (जैसे, `MissingField.UseNull` या `MissingField.Ignore`).

`typeTransformations`पैरामीटर में प्रकार मान `any`, सभी `number` प्रकार, `text`, सभी `date`, `time`, `datetime`, `datetimezone`, और `duration` प्रकार, `logical`, या `binary` हो सकती है. इस पैरामीटर के लिए `list`, `record`, `table`, या `function` प्रकार मान्य नहीं हैं.  
  
`typeTransformations` में सूचीबद्ध प्रत्येक कॉलम के लिए, रूपांतरण करने हेतु आमतौर पर निर्दिष्ट प्रकार मान के अनुरूप ".From" विधि का उपयोग किया जाता है। उदाहरण के लिए, अगर किसी कॉलम के लिए `Currency.Type` प्रकार का मान दिया जाता है, तो उस कॉलम के प्रत्येक मान पर ट्रांसफ़ॉर्मेशन फ़ंक्शन `Currency.From` लागू किया जाता है.


## Examples

### Example #1
प्रथम कॉलम में संख्या मानों को पाठ मानों में रूपांतरित करें.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
तालिका में दिनांकों को उनके फ़्रेंच पाठ के समतुल्य में रूपांतरित करें.
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
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
तालिका के दिनांकों को उनके जर्मन पाठ समतुल्य में और तालिका के मानों को प्रतिशत में रूपांतरित करें.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
`culture` के लिए रिकॉर्ड मान के साथ रूपांतरण लागू करें.
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
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
