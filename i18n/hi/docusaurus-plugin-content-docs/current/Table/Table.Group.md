---
title: Table.Group
---

# Table.Group


## Description

तालिका की उन पंक्तियों को समूहीकृत करता है जिनमें समान कुंजी होती है.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

<code>table</code> की पंक्तियों का समूहीकरण <code>key</code> द्वारा परिभाषित कुंजी स्‍तंभों के अनुसार करता है. <code>key</code> या तो एकल स्तंभ नाम या स्तंभ नामों की सूची हो सकता है.    प्रत्येक समूह के लिए, कुंजी स्तंभ (और उनके मान) वाला रिकॉर्ड बनाया जाता है, इसमें <code>aggregatedColumns</code> द्वारा निर्दिष्ट कोई भी एकीकृत स्तंभ शामिल हो सकते हैं.    वैकल्पिक रूप से, <code>groupKind</code> और <code>comparer</code> भी निर्दिष्ट हो सकते हैं.<br />    <br />    यदि डेटा पहले से ही कुंजी स्तंभ के अनुसार सॉर्ट किया हुआ है, तो, GroupKind.Local का <code>groupKind</code> प्रदान किया जा सकता है. इससे कुछ केस में समूहीकरण के प्रदर्शन में सुधार हो सकता है,    क्योंकि कुंजी मान में दिए गए सेट वाली सभी पंक्तियों को क्रमिक माना जाता है.<br />    <br />    <code>comparer</code> पास करते समय, ध्यान रखें कि यदि वह भिन्न कुंजियों को बराबर मानता है, तो एक पंक्ति को उस समूह में रखा जा सकता है जिनकी कुंजियाँ उसके स्वंय से भिन्न होती हैं.<br />    <br />    यह फ़ंक्शन उन पंक्तियों को क्रम से रखने की गारंटी नहीं देता है जिन्हें वह वापस करता है.  


## Examples

### Example #1 
एक ऐसा एकीकरण स्तंभ [total] जोड़कर तालिका समूहीकृत करें जिसमें मूल्यों का योग (&#34;each List.Sum([price])&#34;) हो.
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
