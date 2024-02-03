---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

विशिष्ट कल्चर का उपयोग करके फ़ॉर्म \{ column, type } का प्रकार ट्रांसफ़ॉर्मेशन लागू करता है.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

वैकल्पिक पैरामीटर <code>culture</code> (उदाहरण के लिए, "en-US") के निर्दिष्ट कल्चर का उपयोग करके, पैरामीटर <code>typeTransformations</code> (जहाँ फ़ॉर्मेट \{ column name, type name} होता है) में निर्दिष्ट स्तंभों पर ट्रांसफ़ॉर्म कार्रवाई लागू करके, इनपुट <code>table</code> से तालिका को लौटाता है.    यदि स्तंभ मौजूद नहीं होता है, तो एक अपवाद दिखाया जाता है.


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; के स्तंभ [a] के संख्या मानों को पाठ मानों में ट्रांसफ़ॉर्म करें.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
