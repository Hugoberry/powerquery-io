---
title: HdInsight.Files
---

# HdInsight.Files


ऐसी तालिका लौटाता है जिसमें किसी Azure संग्रहण वॉल्‍ट से निर्दिष्ट कंटेनर में प्राप्त ब्‍लॉब के गुण और सामग्री शामिल होती है.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

वह तालिका लौटाता है जिसमें किसी Azure संग्रहण वॉल्‍ट से कंटेनर URL <code>account</code> में प्राप्त प्रत्‍येक ब्‍लॉब फ़ाइल के लिए पंक्ति शामिल होती है. प्रत्‍येक पंक्ति में फ़ाइल के गुण और उसकी सामग्री का लिंक होता है.



## Category
Accessing data
