---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

<code>column</code> के मान और <code>hash</code> फ़ंक्शन के आधार पर, <code>table</code> का <code>groups</code> तालिकाओं की सूची में विभाजन करता है.    पंक्ति के लिए हैश मान को प्राप्त करने के लिए <code>hash</code> फ़ंक्शन <code>column</code> पंक्ति के मान पर लागू किया जाता है. हैश मान मॉड्यूलओ <code>groups</code> निर्धारित करता है कि लौटाई गई किस तालिका में पंक्ति को रखा जाएगा.    <ul>       <li><code>table</code>: विभाजित की जाने वाली तालिका.</li>       <li><code>column</code>: यह निर्धारित करने के लिए किस लौटाई गई तालिका में पंक्ति है, हैश किए जाने वाला स्तंभ.</li>       <li><code>groups</code>: तालिकाओं की संख्या जिनमें इनपुट तालिका को विभाजित किया जाएगा.</li>       <li><code>hash</code>: हैश मान प्राप्त करने के लिए फ़ंक्शन लागू किया गया.</li>    </ul>  


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; को, स्तंभों के मान का हैश फ़ंक्शन के रूप में उपयोग करके स्तंभ [a] पर 2 तालिकाओं में विभाजित करें.
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
