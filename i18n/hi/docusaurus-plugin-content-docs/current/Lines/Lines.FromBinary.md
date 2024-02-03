---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

एक बाइनरी मान को पंक्ति विरामों पर विभाजित होने वाली पाठ मानों की सूची में रूपांतरित करता है.  अगर कोई उद्धरण शैली निर्दिष्ट की गई है, तो फिर पंक्ति विराम उद्धरण में दिखाई दे सकते हैं.  अगर includeLineSeparators सही है, तो फिर पंक्ति विराम वर्णों को पाठ में शामिल किया जाता है.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

एक बाइनरी मान को पंक्ति विरामों पर विभाजित होने वाली पाठ मानों की सूची में रूपांतरित करता है.  अगर कोई उद्धरण शैली निर्दिष्ट की गई है, तो फिर पंक्ति विराम उद्धरण में दिखाई दे सकते हैं.  अगर includeLineSeparators सही है, तो फिर पंक्ति विराम वर्णों को पाठ में शामिल किया जाता है.



## Category
Lines
