---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


निर्दिष्ट नाम के स्तंभ का डुप्लिकेट बनाता है. मान और प्रकार की स्रोत स्तंभ से प्रतिलिपि बना ली जाती है.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

तालिका <code>table</code> में <code>columnName</code> नाम के स्तंभ का डुप्लिकेट बनाएँ. स्तंभ <code>newColumnName</code> के लिए मान और प्रकार की स्तंभ <code>columnName</code> से प्रतिलिपि बना ली जाती है.


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; में स्तंभ &#34;a&#34; को &#34;copied column&#34; नाम के स्तंभ में डुप्लिकेट करें.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
