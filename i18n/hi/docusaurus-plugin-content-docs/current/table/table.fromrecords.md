---
title: Table.FromRecords
---

# Table.FromRecords


रिकॉर्ड की सूची को एक तालिका में रूपांतरित करता है.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

रिकॉर्ड्स की निर्दिष्ट सूची को तालिका में रूपांतरित करता है.

-   `records`: उन रिकॉर्ड्स की सूची जिन्हें तालिका में बदलना है.
-   `columns`: (वैकल्पिक) तालिका के कॉलम नामों की सूची, या टेबल का प्रकार.
-   `missingField`: : (वैकल्पिक) यह निर्दिष्ट करता है कि किसी पंक्ति में छूटे हुए फ़ील्ड्स को कैसे हैंडल किया जाए. निम्न में से किसी एक मान का उपयोग करें:
    -   `MissingField.Error`: कोई भी फ़ील्ड अनुपलब्ध होने पर त्रुटि आती है (डिफ़ॉल्ट).
    -   `MissingField.UseNull`: कोई भी अनुपलब्ध फ़ील्ड `null` मानों के रूप में शामिल किए जाते हैं.
      
    इस पैरामीटर में `MissingField.Ignore` का उपयोग करने पर एक त्रुटि उत्पन्न होती है.


## Examples

### Example #1
स्तंभ नामों के रूप में रिकॉर्ड फ़ील्ड नामों का उपयोग करके, रिकॉर्ड से तालिका बनाएँ.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
लिखे गए स्तंभों के साथ रिकॉर्ड से तालिका बनाएँ और संख्या स्तंभ चुनें.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
.एक तालिका बनाएँ, जिसमें निर्दिष्ट रिकॉर्ड के ग्राहकों का पहला नाम, मध्य नाम का पहला अक्षर और अंतिम नाम शामिल हो. अगर कोई मान अनुपलब्ध हो, तो उस मान को `null` से बदलें.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
