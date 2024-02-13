---
title: Table.RemoveColumns
---

# Table.RemoveColumns


निर्दिष्ट स्तंभों को निकालता है.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

दिए गए <code>table</code> से निर्दिष्ट <code>columns</code> निकालता है.    यदि निर्दिष्ट स्तंभ मौजूद नहीं है, तो अगर वैकल्पिक पैरामीटर <code>missingField</code> द्वारा कोई वैकल्पिक व्यवहार निर्दिष्ट नहीं है तो एक त्रुटि उत्पन्न होती है (उदाहरण के लिए, <code>MissingField.UseNull</code> या <code>MissingField.Ignore</code>).


## Examples

### Example #1 
तालिका से स्तंभ [Phone] निकालें.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
तालिका से किसी गैर-मौजूद स्तंभ को निकालने का प्रयास करें.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
