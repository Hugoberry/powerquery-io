---
title: Lines.FromText
---

# Lines.FromText


## Description

एक पाठ मान को पंक्ति विराम पर विभाजित होने वाली पाठ मानों की सूची में रूपांतरित करता है. यदि includeLineSeparators true है, तो फिर पंक्ति विराम वर्णों को पाठ में शामिल किया जाता है.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

पाठ मान को पंक्ति विरामों पर पाठ मान विभाजन की सूची में बदलता है. यदि includeLineSeparators सही है, तो पंक्ति विराम वर्ण पाठ में शामिल हो जाते हैं.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (डिफ़ॉल्ट) कोई उद्धरण व्यवहार आवश्यक नहीं.</li>            <li><code>QuoteStyle.Csv:</code> उद्धरण Csv के अनुसार है. दोहरे उद्धरण वर्ण ऐसे क्षेत्रों का सीमांकन करने के लिए उपयोग किए जाते हैं और दोहरे उद्धरण वर्णों के युग्म को ऐसे किसी क्षेत्र में एकल दोहरे उद्धरण वर्ण का संकेत देने के लिए उपयोग किया जाता है. </li>          </ul>        </div>    



## Category
Lines
