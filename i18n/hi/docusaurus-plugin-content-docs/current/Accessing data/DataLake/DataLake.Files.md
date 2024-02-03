---
title: DataLake.Files
---

# DataLake.Files


## Description

अपने Azure Data Lake Storage खाते का URL दर्ज करें.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Azure Data Lake Storage Gen1 से एक ऐसी नेविगेशन तालिका लौटाता है, जिसमें <code>url</code> में पाई गई प्रत्येक फ़ाइल के लिए एक पंक्ति शामिल है. प्रत्येक पंक्ति में फ़ाइल के गुण और इसकी सामग्री का एक लिंक शामिल है.


