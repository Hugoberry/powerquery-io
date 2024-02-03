---
title: Hdfs.Contents
---

# Hdfs.Contents


## Description

ऐसी तालिका लौटाता है जिसमें किसी Hadoop फ़ाइल सिस्टम से निर्दिष्ट फ़ोल्डर में प्राप्त फ़ाइलों और फ़ोल्डर के गुण और उनकी सामग्रियाँ होती हैं.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Details

एक ऐसी तालिका लौटाता है जिसमें Hadoop फ़ाइल सिस्टम से फ़ोल्डर URL, <code>url</code>, में प्राप्त प्रत्येक फ़ोल्डर और फ़ाइल के लिए एक पंक्ति होती है. प्रत्येक पंक्ति में फ़ोल्डर या फ़ाइल के गुण और उसकी सामग्री का लिंक होता है.



## Category
Accessing data
