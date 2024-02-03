---
title: List.DateTimes
---

# List.DateTimes


## Description

दिनांक समय मानों की सूची जनरेट करता है जिसमें प्रारंभिक मान, गणना और वृद्धिशील अवधि मान दिया होता है.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> से प्रारंभ होने वाले, आकार <code>count</code> के <code>datetime</code> मानों की सूची लौटाता है. दी गई वृद्धि, <code>step</code>, एक <code>duration</code> मान है जिसे प्रत्येक मान में जोड़ा जाता है.


## Examples

### Example #1 
नव वर्ष के दिन (#datetime(2011, 12, 31, 23, 55, 0)) से 5 मिनट पहले प्रारंभ होने वाले 10 मानों, 1 मिनट (#duration(0, 0, 1, 0)) बढ़ते हुए, की एक सूची बनाएँ.
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
