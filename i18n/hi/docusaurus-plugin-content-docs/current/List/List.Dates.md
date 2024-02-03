---
title: List.Dates
---

# List.Dates


## Description

दिनांक मानों की सूची जनरेट करता है जिसमें प्रारंभिक मान, गणना और वृद्धिशील अवधि मान दिया होता है.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> से प्रारंभ होने वाले, आकार <code>count</code> के <code>date</code> मानों की सूची लौटाता है. दी गई वृद्धि, <code>step</code>, एक <code>duration</code> मान है जिसे प्रत्येक मान में जोड़ा जाता है.


## Examples

### Example #1 
नव वर्ष की संध्या (#date(2011, 12, 31)) से प्रारंभ होने वाले 5 मानों की, 1 दिन (#duration(1, 0, 0, 0)) बढ़ते हुए, एक सूची बनाएँ.
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
