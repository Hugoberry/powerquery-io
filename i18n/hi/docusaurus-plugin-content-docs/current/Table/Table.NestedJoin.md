---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

प्रदत्त स्तंभों पर तालिकाओं के बीच एक जॉइन करता है और एक नए स्तंभ में जॉइन परिणाम देता है.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Details

<code>key1</code> (<code>table1</code> के लिए)और <code>key2</code> (<code>table2</code> के लिए) द्वारा चयनित कुँजी स्तंभों के मानों की गुणवत्ता के आधार पर <code>table1</code> की पंक्तियों और <code>table2</code> की पंक्तियों को जॉइन करता है. परिणामों को <code>newColumnName</code> नाम वाले स्तंभ में दर्ज किया जाता है.<br />वैकल्पिक <code>joinKind</code> निष्पादित किए जाने वाले जॉइन के प्रकार को निर्दिष्ट करता है. डिफ़ॉल्ट रूप से, यदि <code>joinKind</code> निर्दिष्ट नहीं किया जाता है, तो दायाँ बाह्य जॉइन निष्पादित किया जाता है.<br />कुंजी स्तंभों की तुलना करने के तरीकों को निर्दिष्ट करने के लिए <code>keyEqualityComparers</code> का एक वैकल्पिक सेट भी शामिल किया जा सकता है.<br /> 


## Examples

### Example #1 
एकल कुंजी स्‍तंभ का उपयोग करके दो तालिकाओं को जोड़ें.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
