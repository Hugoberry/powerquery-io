---
title: Table.SelectColumns
---

# Table.SelectColumns


केवल निर्दिष्ट स्तंभों के साथ एक तालिका लौटाता है.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

केवल निर्दिष्ट <code>columns</code> के साथ <code>table</code> लौटाता है.    <ul>       <li><code>table</code>: प्रदान की गई तालिका.</li>       <li><code>columns</code>: वापस करने के लिए तालिका <code>table</code> से कालम की सूची. <code>columns</code> में सूचीबद्ध ऑर्डर में वापस की गई तालिका में कालम.</li>       <li><code>missingField</code>: <i>(Optional)</i> कालम न होने पर क्या करें.  उदाहरण: <code>MissingField.UseNull</code> या <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
केवल स्तंभ [Name] शामिल करें.
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
केवल स्तंभ [CustomerID] और [Name] शामिल करें.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
यदि शामिल किया गया कालम मौजूद नहीं है, तो डिफ़ॉल्ट परिणाम एक त्रुटि होता है.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
यदि शामिल किया गया कालम मौजूद न हो, तो विकल्प &lt;code&gt;MissingField.UseNull&lt;/code&gt; नल मानों का एक कालम बनाता है.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
