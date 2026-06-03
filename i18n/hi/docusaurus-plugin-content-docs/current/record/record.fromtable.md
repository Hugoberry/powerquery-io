---
title: Record.FromTable
---

# Record.FromTable


किसी तालिका से \{\[Name = name, Value = value\]\} के रूप में एक रिकॉर्ड बनाता है.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

यह रिकॉर्ड के एक तालिका `table` से एक रिकॉर्ड लौटाता है जिसमें फ़ील्ड नाम और मान नाम `{[Name = name, Value = value]}` होते हैं. अगर फ़ील्ड नाम अद्वितीय नहीं हैं, तो एक त्रुटि उत्पन्न होती है.


## Examples

### Example #1
फ़ॉर्म तालिका की तालिका से एक रिकॉर्ड बनाएँ.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
