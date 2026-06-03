---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


स्तंभों में मौजूद रिकॉर्ड के स्तंभ को प्रत्येक मान के साथ विस्तृत करता है.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

इनपुट `table` में रिकॉर्ड का दिया गया `column`, रिकॉर्ड की प्रत्येक फ़ील्ड के लिए स्तंभ वाली तालिका बनाता है. वैकल्पिक रूप से, नई तालिका में स्तंभों के लिए अद्वितीय नाम सुनिश्चित करने के लिए `newColumnNames` को निर्दिष्ट किया जा सकता है.

-   `table`: विस्तृत किए जाने वाले रिकॉर्ड स्तंभ वाली मूल तालिका.
-   `column`: विस्तृत किया जाने वाला स्तंभ.
-   `fieldNames`: तालिका में मौजूद स्तंभों में विस्तृत की जाने वाली फ़ील्ड की सूची.
-   `newColumnNames`: नए स्तंभ देने के लिए स्तंभ नामों की सूची. नए स्तंभ नाम, नई तालिका में किसी भी स्तंभ का डुप्लिकेट नहीं बना सकते.


## Examples

### Example #1
तालिका `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` के स्तंभ \[a\] को 3 स्तंभों "aa", "bb" और "cc" में विस्तृत करें.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
