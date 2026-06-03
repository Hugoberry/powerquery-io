---
title: Table.Partition
---

# Table.Partition


समूहों की संख्या और निर्दिष्ट स्तंभ के आधार पर तालिका का तालिकाओं की सूची में विभाजन करता है.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

`column` के मान और `hash` फ़ंक्शन के आधार पर, `table` का `groups` तालिकाओं की सूची में विभाजन करता है. पंक्ति के लिए हैश मान को प्राप्त करने के लिए `hash` फ़ंक्शन `column` पंक्ति के मान पर लागू किया जाता है. हैश मान मॉड्यूलओ `groups` निर्धारित करता है कि लौटाई गई किस तालिका में पंक्ति को रखा जाएगा.

-   `table`: विभाजित की जाने वाली तालिका.
-   `column`: यह निर्धारित करने के लिए किस लौटाई गई तालिका में पंक्ति है, हैश किए जाने वाला स्तंभ.
-   `groups`: तालिकाओं की संख्या जिनमें इनपुट तालिका को विभाजित किया जाएगा.
-   `hash`: हैश मान प्राप्त करने के लिए फ़ंक्शन लागू किया गया.


## Examples

### Example #1
तालिका `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` को, स्तंभों के मान का हैश फ़ंक्शन के रूप में उपयोग करके स्तंभ \[a\] पर 2 तालिकाओं में विभाजित करें.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
