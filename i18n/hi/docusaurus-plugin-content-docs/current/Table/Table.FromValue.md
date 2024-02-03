---
title: Table.FromValue
---

# Table.FromValue


## Description

प्रदान किए मान(मानों) से एक स्तंभ वाली तालिका बनाता है.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

स्तंभ वाली ऐसी तालिका बनाता है जिसमें प्रदान किए गए मान या मानों की सूची, <code>value</code> होती है. कोई वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code>, निम्न विकल्पों को नियंत्रित करने के लिए निर्दिष्ट किया जा सकता है:    <ul>    <li> <code>DefaultColumnName</code> : स्तंभ नाम का उपयोग जब किया जाता है जब सूची या स्केलर मान से तालिका बनाई जाती है.</li>    </ul>  


## Examples

### Example #1 
मान 1 से एक तालिका बनाएँ.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
सूची से तालिका बनाएँ.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
कस्टम स्तंभ नाम के साथ, मान 1 से तालिका बनाएँ.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
