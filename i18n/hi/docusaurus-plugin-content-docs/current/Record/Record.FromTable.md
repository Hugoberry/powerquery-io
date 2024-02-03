---
title: Record.FromTable
---

# Record.FromTable


## Description

किसी तालिका से \{[Name = name, Value = value]} के रूप में एक रिकॉर्ड बनाता है.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

रिकॉर्ड की तालिका <code>table</code> से एक रिकॉर्ड लौटाता है, जिसमें फ़ील्ड नाम और मान नाम <code>\{[Name = name, Value = value]}</code> होते हैं. अगर फ़ील्ड नाम अद्वितीय नहीं हैं, तो एक अपवाद दिखाया जाता है.


## Examples

### Example #1 
फ़ॉर्म तालिका की तालिका से एक रिकॉर्ड बनाएँ.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
