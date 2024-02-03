---
title: Table.MinN
---

# Table.MinN


## Description

दिए गए मापदंड का उपयोग करके सबसे छोटी पंक्ति(याँ) लौटाता है.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

दिए गए <code>comparisonCriteria</code> का उपयोग करके, <code>table</code> की सबसे छोटी पंक्तियाँ लौटाता है. पंक्तियों को सॉर्ट करने के बाद, परिणाम को आगे फ़िल्टर करने के लिए <code>countOrCondition</code> पैरामीटर निर्दिष्ट किया जाना चाहिए. ध्यान दें एल्गोरिथ्म को सॉर्ट करना सॉर्ट किए गए नियत परिणाम की गारंटी नहीं देता. <code>countOrCondition</code> पैरामीटर एकाधिक फ़ॉर्म ले सकता है:    <ul>        <li> यदि कोई संख्या निर्दिष्ट है, तो <code>countOrCondition</code> आइटम्स तक की सूची आरोही क्रम में लौटाई जाती है. </li>        <li> यदि कोई शर्त निर्दिष्ट है, तो प्रारंभिक रूप से शर्त को पूरा करने वाले आइटमों की सूची को लौटाया जाता है. एकबार आइटम द्वारा शर्त को पूरा न करने पर, आगे किसी भी आइटम पर विचार नहीं किया जाता है. </li> </ul>


## Examples

### Example #1 
तालिका की वह पंक्ति ढूँढें जिसके स्तंभ [a] में स्थिति [a] &lt; 3 वाला सबसे छोटा मान है. फ़िल्टर लागू करने से पहले पंक्तियाँ सॉर्ट की गई हैं.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
तालिका की वह पंक्ति ढूँढें जिसके स्तंभ [a] में स्थिति [b] &lt; 0 वाला सबसे छोटा मान है. फ़िल्टर लागू करने से पहले पंक्तियाँ सॉर्ट की गई हैं.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
