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

इनपुट <code>table</code> में रिकॉर्ड का दिया गया <code>column</code>, रिकॉर्ड की प्रत्येक फ़ील्ड के लिए स्तंभ वाली तालिका बनाता है. वैकल्पिक रूप से, नई तालिका में स्तंभों के लिए अद्वितीय नाम सुनिश्चित करने के लिए <code>newColumnNames</code> को निर्दिष्ट किया जा सकता है.    <ul>        <li><code>table</code>: विस्तृत किए जाने वाले रिकॉर्ड स्तंभ वाली मूल तालिका. </li>        <li><code>column</code>: विस्तृत किया जाने वाला स्तंभ.</li>        <li><code>fieldNames</code>: तालिका में मौजूद स्तंभों में विस्तृत की जाने वाली फ़ील्ड की सूची.</li>        <li><code>newColumnNames</code>: नए स्तंभ देने के लिए स्तंभ नामों की सूची. नए स्तंभ नाम, नई तालिका में किसी भी स्तंभ का डुप्लिकेट नहीं बना सकते.</li>    </ul>


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; के स्तंभ [a] को 3 स्तंभों &#34;aa&#34;, &#34;bb&#34; और &#34;cc&#34; में विस्तृत करें.
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
