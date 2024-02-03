---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

मानों की पहली पंक्ति को नए स्तंभ शीर्षलेख (अर्थात स्तंभ नाम) के रूप में संवर्धित करता है.


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

मानों की पहली पंक्ति को नए स्तंभ शीर्षलेख (अर्थात स्तंभ नाम) के रूप में संवर्धित करता है. शीर्षलेख के लिए डिफ़ॉल्ट रूप से केवल पाठ या संख्या मानों का प्रचार किया जाता है. मान्य विकल्प:    <div>      <code>PromoteAllScalars</code> : <code>सही</code> पर सेट होने पर, <code>संस्कृति</code> का उपयोग करके सभी स्केलर मानों का शीर्षलेख के लिए पहली पंक्ति में प्रचार किया जाता है, निर्दिष्ट होने पर (या मौजूदा स्थानीय लोकेल).    ऐसे मानों के लिए डिफ़ॉल्ट स्तंभ नाम का उपयोग किया जाएगा, जिन्हें पाठ में रूपांतरित नहीं किया जा सकता.    </div>    <div>    <code>संस्कृति</code> : डेटा की संस्कृति को निर्दिष्ट करने वाला संस्कृति नाम.    </div>  


## Examples

### Example #1 
तालिका में मानों की पहली पंक्ति को उन्नत करें.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
तालिका की पहली पंक्ति से शीर्षलेखों तक सभी स्केलर का प्रचार करें.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
