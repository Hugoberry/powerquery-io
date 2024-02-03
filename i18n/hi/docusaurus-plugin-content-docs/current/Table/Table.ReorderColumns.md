---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

निर्दिष्ट क्रम में स्तंभों के साथ एक तालिका लौटाता है.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>columnOrder</code> द्वारा निर्दिष्ट क्रम में स्तंभों के साथ इनपुट <code>table</code> की एक तालिका लौटाता है. सूची में निर्दिष्ट न किए गए स्तंभों को पुनः क्रमबद्ध नहीं किया जाएगा.     यदि स्तंभ मौजूद नहीं होता है, तो जबतक वैकल्पिक पैरामीटर <code>missingField</code> कोई विकल्प निर्दिष्ट नहीं कर देता एक अपवाद दिखाया जाता है (उदाहरण <code>MissingField.UseNull</code> या <code>MissingField.Ignore</code>).


## Examples

### Example #1 
तालिका में स्तंभ [Phone] और [Name] का क्रम बदलें.
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
तालिका में स्तंभ [Phone] और [Address] का क्रम बदलें या &#34;MissingField.Ignore&#34; का उपयोग करें. यह तालिका को नहीं बदलता है क्योंकि स्तंभ [Address] मौजूद नहीं है.
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
