---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


इनपुट तालिका की केवल उन पंक्तियों के साथ एक तालिका लौटाता है जिनके कम से कम एक कक्ष में त्रुटि हो. यदि स्तंभों की सूची निर्दिष्ट की गई होती है, तो निर्दिष्ट स्तंभों में केवल कक्षों का त्रुटियों के लिए निरीक्षण किया जाता है.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

इनपुट तालिका की केवल उन पंक्तियों के साथ एक तालिका लौटाता है जिनके कम से कम एक कक्ष में त्रुटि हो. यदि स्तंभों की सूची निर्दिष्ट की गई होती है, तो निर्दिष्ट स्तंभों में केवल कक्षों का त्रुटियों के लिए निरीक्षण किया जाता है.


## Examples

### Example #1 
ग्राहकों की पंक्तियों में त्रुटियों वाले ग्राहक के नाम चुनें.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
