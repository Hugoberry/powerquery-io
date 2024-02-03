---
title: DataLake.Contents
---

# DataLake.Contents


## Description

अपने Azure Data Lake Storage Gen1 खाते का URL दर्ज करें.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Azure Data Lake Storage Gen1 से एक ऐसी नेविगेशन तालिका लौटाता है, जिसमें <code>url</code> में पाए जाने वाले प्रत्येक फ़ोल्डर और फ़ाइल के लिए एक पंक्ति शामिल है. प्रत्येक पंक्ति में फ़ोल्डर और फ़ाइल के गुण और इसकी सामग्री का एक लिंक शामिल है.


