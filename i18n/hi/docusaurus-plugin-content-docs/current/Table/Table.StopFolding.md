---
title: Table.StopFolding
---

# Table.StopFolding


## Description

किसी भी डाउनस्ट्रीम कार्रवाई को डेटा के मूल स्रोत के विरुद्ध चलने से रोकता है.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

किसी भी डाउनस्ट्रीम कार्रवाई को <code>table</code> में डेटा के मूल स्रोत के विरुद्ध चलाए जाने से रोकता है.


## Examples

### Example #1 
SQL, तालिका से इस तरह डेटा फ़ेच करता है जो किसी भी डाउनस्ट्रीम कार्रवाई को SQL सर्वर पर क्वेरी के रूप में चलने से रोकता है.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(dbo_MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
