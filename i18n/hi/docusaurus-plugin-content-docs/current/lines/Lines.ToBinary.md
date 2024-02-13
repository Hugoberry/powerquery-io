---
title: Lines.ToBinary
---

# Lines.ToBinary


निर्दिष्ट एन्कोडिंग और lineSeparator का उपयोग करके पाठ की सूची को एक बाइनरी मान में रूपांतरित करता है. निर्दिष्ट lineSeparator को प्रत्येक पंक्ति में जोड़ा जाता है.  अगर निर्दिष्ट नहीं है, तो फिर पंक्ति की शुरुआत में जाएँ और पंक्ति फ़ीड वर्णों का उपयोग किया जाता है.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

निर्दिष्ट एन्कोडिंग और lineSeparator का उपयोग करके पाठ की सूची को एक बाइनरी मान में रूपांतरित करता है. निर्दिष्ट lineSeparator को प्रत्येक पंक्ति में जोड़ा जाता है.  अगर निर्दिष्ट नहीं है, तो फिर पंक्ति की शुरुआत में जाएँ और पंक्ति फ़ीड वर्णों का उपयोग किया जाता है.



## Category
Lines
