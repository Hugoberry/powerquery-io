---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

इनपुट तालिका में से निकाली गई पंक्तियों वाली तालिका लौटाता है और जिनके कम से कम एक कक्ष में त्रुटि हो. यदि स्तंभों की सूची निर्दिष्ट की गई होती है, तो निर्दिष्ट स्तंभों में केवल कक्षों का त्रुटियों के लिए निरीक्षण किया जाता है.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

इनपुट तालिका में से निकाली गई पंक्तियों वाली तालिका लौटाता है और जिनके कम से कम एक कक्ष में त्रुटि हो. यदि स्तंभों की सूची निर्दिष्ट की गई होती है, तो निर्दिष्ट स्तंभों में केवल कक्षों का त्रुटियों के लिए निरीक्षण किया जाता है.


## Examples

### Example #1 
पहली पंक्ति से त्रुटि मान निकालें.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
