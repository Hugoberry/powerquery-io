---
title: Folder.Files
---

# Folder.Files


## Description

ऐसी तालिका लौटाता है जिसमें निर्दिष्ट फ़ोल्डर और उप-फ़ोल्डर में प्राप्त फ़ाइलों के गुण और उनकी सामग्रियाँ होती हैं.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

एक ऐसी तालिका लौटाता है जिसमें<code>path</code> फ़ोल्डर और इसके तमाम सबफ़ोल्डर्स में मिली प्रत्येक फ़ाइल के लिए एक पंक्ति होती है. प्रत्येक पंक्ति में फ़ोल्डर या फ़ाइल के गुण और उसकी सामग्री का एक लिंक होता है. <code>options</code> पैरामीटर वर्तमान में केवल आंतरिक उपयोग के लिए अभिप्रेत है.



## Category
Accessing data
