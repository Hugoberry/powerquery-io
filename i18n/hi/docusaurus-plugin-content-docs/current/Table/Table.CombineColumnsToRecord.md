---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

निर्दिष्ट स्तंभों को एक नए रिकॉर्ड-मान वाले स्तंभ में संयोजित करता है जहाँ प्रत्येक रिकॉर्ड में उन स्तंभ नामों और मानों के आधार पर स्तंभ नाम और मान हैं, जिन्हें संयोजित किया गया था.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

<code>table</code> के निर्दिष्ट स्तंभों को <code>newColumnName</code> नाम वाले नए रिकॉर्ड-मान वाले स्तंभ में संयोजित करता है, जहाँ प्रत्येक रिकॉर्ड में स्तंभ नाम और संयोजित किए गए स्तंभों के मानों से संबंधित फ़ील्ड नाम और मान हैं. यदि कोई रिकॉर्ड <code>options</code> के लिए निर्दिष्ट किया गया है, तो निम्न विकल्प प्रदान किए जा सकते हैं: :    <ul>     <li> <code>DisplayNameColumn</code>: पाठ के रूप में निर्दिष्ट किए जाने पर, यह इंगित करता है कि दिए गए स्तंभ नाम को रिकॉर्ड के डिस्प्ले नाम के रूप में माना जाना चाहिए. यह आवश्यक है कि रिकॉर्ड में मौजूद स्तंभों में से एक न हो. </li>     <li> <code>TypeName</code>: पाठ के रूप में निर्दिष्ट किए जाने पर, परिणामी रिकॉर्ड के लिए एक लॉजिकल प्रकार नाम की आपूर्ति करता है, जिसका उपयोग लोडिंग वातावरण द्वारा व्यवहार को ड्राइव करने के लिए डेटा लोड में किया जा सकता है.</li>    </ul>    



## Category
Table.Transformation
