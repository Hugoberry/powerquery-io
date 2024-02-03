---
title: List.Distinct
---

# List.Distinct


## Description

उन मानों की सूची लौटाता है जिनके डुप्लिकेट निकाल दिए गए हैं.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

वह सूची लौटाता है जिसमें सूची <code>list</code> के वे सभी मान होते हैं जिनका डुप्लिकेट निकाल दिए गए हैं. अगर सूची रिक्त हो, तो परिणाम भी एक रिक्त सूची होता है.


## Examples

### Example #1 
सूची \{1, 1, 2, 3, 3, 3} से डुप्लिकेट निकालें
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
