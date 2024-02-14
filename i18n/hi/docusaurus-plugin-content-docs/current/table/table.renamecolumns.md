---
title: Table.RenameColumns
---

# Table.RenameColumns


फ़ॉर्म \{old, new} के नाम बदलता है.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

तालिका <code>table</code> में स्तंभों पर दिए गए बदले हुए नाम लागू करता है. एक प्रतिस्थापन कार्रवाई <code>renames</code> की सूची में प्रदान किए गए दो मानों, पुराना स्तंभ नाम और नया स्तंभ नाम, की सूची होती है.    यदि स्तंभ मौजूद नहीं होता है, तो जब तक वैकल्पिक पैरामीटर <code>missingField</code> कोई विकल्प निर्दिष्ट नहीं कर देता एक अपवाद दिखाया जाता है (उदाहरण <code>MissingField.UseNull</code> या <code>MissingField.Ignore</code>).


## Examples

### Example #1 
तालिका में स्तंभ नाम &#34;CustomerNum&#34; को &#34;CustomerID&#34; से बदलें.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
तालिका में स्तंभ नाम &#34;CustomerNum&#34; को &#34;CustomerID&#34; से और &#34;PhoneNum&#34; को &#34;फ़ोन&#34; से बदलें.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
तालिका स्तंभ नाम &#34;NewCol&#34; को &#34;NewColumn&#34; से बदलें, और यदि स्तंभ मौजूद नहीं होता है तो उस पर ध्यान न दें.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
