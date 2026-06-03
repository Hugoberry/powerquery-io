---
title: Table.ReorderColumns
---

# Table.ReorderColumns


निर्दिष्ट क्रम में स्तंभों के साथ एक तालिका लौटाता है.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

इनपुट `table` से एक तालिका लौटाता है, जिसमें कॉलम `columnOrder` द्वारा निर्दिष्ट क्रम में होते हैं. जो कॉलम सूची में निर्दिष्ट नहीं हैं, उन्हें दोबारा क्रमित नहीं किया जाएगा. अगर कॉलम मौजूद नहीं है, तो एक त्रुटि आएगी, जब तक कि वैकल्पिक पैरामीटर `missingField` कोई दूसरा विकल्प निर्दिष्ट न करे (जैसे `MissingField.UseNull` या `MissingField.Ignore`).


## Examples

### Example #1
तालिका में स्तंभ \[Phone\] और \[Name\] का क्रम बदलें.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
तालिका में स्तंभ \[Phone\] और \[Address\] का क्रम बदलें या "MissingField.Ignore" का उपयोग करें. यह तालिका को नहीं बदलता है क्योंकि स्तंभ \[Address\] मौजूद नहीं है.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
