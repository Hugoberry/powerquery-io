---
title: Number.Power
---

# Number.Power


किसी संख्या को दी गई घात तक बढ़ाता है.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

`number` को `power` की घात तक बढ़ाने का परिणाम लौटाता है. यदि `number` या `power` नल हैं, तो `Number.Power` नल लौटाता है.

-   `number`: मूल.
-   `power`: घातांक.


## Examples

### Example #1
5 का मान प्राप्त करें, जिसकी घात 3 (5 क्यूब तक) तक बढ़ी हुई हो.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
