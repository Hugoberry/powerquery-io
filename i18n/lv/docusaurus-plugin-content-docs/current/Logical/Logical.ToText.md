---
title: Logical.ToText
---

# Logical.ToText


## Description

Tiek atgriezta teksta vērtība true vai false atbilstoši norādītajai loģiskajai vērtībai.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

No loģiskās vērtības <code>logicalValue</code>, kas var būt <code>true</code> vai <code>false</code>, tiek izveidota teksta vērtība. Ja <code>logicalValue</code> nav loģiskā vērtība, tiek aktivizēts izņēmums.


## Examples

### Example #1 
Izveidojiet teksta vērtību no loģiskās vērtības &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
