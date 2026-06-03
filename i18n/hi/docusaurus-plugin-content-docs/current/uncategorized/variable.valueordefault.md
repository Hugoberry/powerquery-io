---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


निर्दिष्ट चर का मान लौटाता है या अगर चर परिभाषित नहीं है तो डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

यह वर्तमान मूल्यांकन परिवेश द्वारा परिभाषित निर्दिष्ट चर `identifier` का मान लौटाता है. अगर चर परिभाषित नहीं है, तो वैकल्पिक `defaultValue` लौटाया जाता है.



## Category
Values.Implementation
