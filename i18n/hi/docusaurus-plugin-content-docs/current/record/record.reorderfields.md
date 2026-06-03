---
title: Record.ReorderFields
---

# Record.ReorderFields


फ़ील्ड के नामों की किसी सूची के क्रम से मिलान करने के लिए, रिकॉर्ड फ़ील्ड्स को पुनः क्रमबद्ध करता है.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

फ़ील्ड के नामों की किसी सूची के क्रम से मिलान करने के लिए,किसी रिकॉर्ड के फ़ील्ड को पुनः क्रमबद्ध करता है.

-   `record`: वह रिकॉर्ड जिसमें पुनः क्रमित किए जाने वाले फ़ील्ड शामिल हैं.
-   `fieldOrder`: फ़ील्ड के नए क्रम वाली एक सूची जिसे रिकॉर्ड पर लागू करना है. फ़ील्ड के मान बनाए रखे जाते हैं और इस पैरामीटर में सूचीबद्ध न किए गए फ़ील्ड को उनकी मूल स्थितियों में छोड़ दिया जाता है.
-   `missingField`: उस पंक्ति के अनुपलब्ध मानों के लिए अपेक्षित कार्रवाई निर्दिष्ट करता है जिसमें अपेक्षा से कम फ़ील्ड होते हैं. निम्न मान मान्य हैं:
    -   `MissingField.Error`: (डिफ़ॉल्ट) इंगित करता है कि अनुपलब्ध फ़ील्ड के परिणामस्वरूप एक त्रुटि होनी चाहिए. अगर `missingField` पैरामीटर के लिए कोई भी मान दर्ज नहीं किया जाता है, तो इस मान का उपयोग किया जाता है.
    -   `MissingField.Ignore`: इंगित करता है कि अनुपलब्ध फ़ील्ड की उपेक्षा की जानी चाहिए.
    -   `MissingField.UseNull`: इंगित करता है कि अनुपलब्ध फ़ील्ड को `नल` मानों के रूप में शामिल किया जाना चाहिए.


## Examples

### Example #1
रिकॉर्ड में कुछ फ़ील्ड पुनः क्रमित करें.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
रिकॉर्ड में कुछ फ़ील्ड्स को पुनः क्रमित करें और किसी भी अनुपलब्ध फ़ील्ड के लिए `नल` शामिल करें.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
