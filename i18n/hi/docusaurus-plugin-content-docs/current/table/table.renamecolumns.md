---
title: Table.RenameColumns
---

# Table.RenameColumns


फ़ॉर्म \{old, new\} के नाम बदलता है.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

तालिका `table` में कॉलम पर दिए गए बदले हुए नाम लागू करता है. एक प्रतिस्थापन कार्रवाई `renames` में दो मानों की एक सूची होती है, पुराना कॉलम नाम और नया कॉलम नाम, जो एक सूची में दिए गए होते हैं. अगर कॉलम मौजूद नहीं है, तो एक त्रुटि आएगी, जब तक कि वैकल्पिक पैरामीटर `missingField` कोई दूसरा विकल्प निर्दिष्ट न करे (जैसे `MissingField.UseNull` या `MissingField.Ignore`).


## Examples

### Example #1
तालिका में स्तंभ नाम "CustomerNum" को "CustomerID" से बदलें.
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
तालिका में स्तंभ नाम "CustomerNum" को "CustomerID" से और "PhoneNum" को "फ़ोन" से बदलें.
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
तालिका स्तंभ नाम "NewCol" को "NewColumn" से बदलें, और यदि स्तंभ मौजूद नहीं होता है तो उस पर ध्यान न दें.
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
