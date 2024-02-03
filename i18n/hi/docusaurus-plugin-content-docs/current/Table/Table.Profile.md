---
title: Table.Profile
---

# Table.Profile


## Description

किसी तालिका के स्तंभों की प्रोफ़ाइल लौटाता है.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

<code>table</code> में स्तंभों के लिए प्रोफ़ाइल लौटाता है.<br />प्रत्येक स्तंभ के लिए निम्न जानकारी लौटाई जाती है (लागू होने पर):<ul>  <li>न्यूनतम</li>  <li>अधिकतम</li>  <li>औसत</li>  <li>मानक विचलन</li>  <li>गणना</li>  <li>शून्य गणना</li>  <li>अलग गणना</li></ul><br />



## Category
Table.Information
