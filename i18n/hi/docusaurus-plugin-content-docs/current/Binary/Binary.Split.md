---
title: Binary.Split
---

# Binary.Split


## Description

निर्दिष्ट बाइनरी को निर्दिष्ट पृष्ठ आकार का उपयोग करके बायनेरिज़ की सूची में विभाजित करता है.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

<code>binary</code> को बायनेरिज़ की सूची में विभाजित करता है जहाँ आउटपुट सूची का पहला तत्व एक बाइनरी है जिसमें  से पहले <code>pageSize</code> बाइट्स होते हैं
    स्रोत बाइनरी, आउटपुट सूची का अगला तत्व एक बाइनरी है जिसमें स्रोत बाइनरी से अगले <code>pageSize</code> बाइट होते हैं, और बहुत कुछ.



## Category
Binary
