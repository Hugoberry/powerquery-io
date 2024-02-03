---
title: Logical.ToText
---

# Logical.ToText


## Description

Palauttaa tekstin true tai false, kun annetaan looginen arvo.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Luo loogisesta arvosta <code>logicalValue</code> tekstiarvon, joko <code>true</code> tai <code>false</code>. Jos <code>logicalValue</code> ei ole looginen arvo, tapahtuu poikkeus.


## Examples

### Example #1 
Luo tekstiarvo loogisesta kohteesta &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
