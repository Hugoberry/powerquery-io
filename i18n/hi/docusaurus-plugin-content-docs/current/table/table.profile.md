---
title: Table.Profile
---

# Table.Profile


किसी तालिका के स्तंभों की प्रोफ़ाइल लौटाता है.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

`table` में स्तंभों के लिए प्रोफ़ाइल लौटाता है.

प्रत्येक स्तंभ के लिए निम्न जानकारी लौटाई जाती है (लागू होने पर):

-   न्यूनतम
-   अधिकतम
-   औसत
-   मानक विचलन
-   गणना
-   शून्य गणना
-   अलग गणना



## Category
Table.Information
