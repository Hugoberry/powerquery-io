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

केवल निर्दिष्ट `columns` के साथ `table` लौटाता है.

-   `table`: दी गई तालिका.
-   `columns`: तालिका `table` से लौटाए जाने वाले कॉलम की सूची. वापस की गई तालिका के कॉलम `columns` में सूचीबद्ध क्रम में हैं.
-   `missingField`: *(वैकल्पिक)* अगर कॉलम मौजूद न हो, तो क्या करें. उदाहरण: `MissingField.UseNull` या `MissingField.Ignore`.


## Examples

### Example #1
केवल स्तंभ \[Name\] शामिल करें.
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
केवल स्तंभ \[CustomerID\] और \[Name\] शामिल करें.
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
यदि शामिल किया गया कालम मौजूद न हो, तो विकल्प `MissingField.UseNull` नल मानों का एक कालम बनाता है.
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
