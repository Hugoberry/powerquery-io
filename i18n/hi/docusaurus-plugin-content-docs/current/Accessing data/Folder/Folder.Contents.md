---
title: Folder.Contents
---

# Folder.Contents


## Description

निर्दिष्ट फ़ोल्डर में मिली फ़ाइलें और फ़ोल्डर के गुणों और सामग्रियों वाली एक तालिका लौटाता है.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

एक ऐसी तालिका लौटाता है जिसमें प्रत्येक फ़ोल्डर के लिए एक पंक्ति और फ़ोल्डर में मिली फ़ाइल होती है <code>path</code>. प्रत्येक पंक्ति में फ़ोल्डर या फ़ाइल के गुण और उसकी सामग्री का एक लिंक होता है. <code>options</code> पैरामीटर वर्तमान में केवल आंतरिक उपयोग के लिए अभिप्रेत है.



## Category
Accessing data
