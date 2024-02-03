---
title: Number.Power
---

# Number.Power


## Description

किसी संख्या को दी गई घात तक बढ़ाता है.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

<code>number</code> को <code>power</code> की घात तक बढ़ाने का परिणाम लौटाता है.    यदि <code>number</code> या <code>power</code> नल हैं, तो <code>Number.Power</code> नल लौटाता है.      <ul>        <li><code>number</code>: मूल.</li>        <li><code>power</code>: घातांक.</li>      </ul>


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
