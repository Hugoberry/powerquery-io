---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

दिनांक समय क्षेत्र मानों की सूची जनरेट करता है जिसमें प्रारंभिक मान, गणना और वृद्धिशील अवधि मान दिया होता है.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> से प्रारंभ होने वाले, आकार <code>count</code> के <code>datetimezone</code> मानों की सूची लौटाता है. दी गई वृद्धि, <code>step</code>, एक <code>duration</code> मान है जिसे प्रत्येक मान में जोड़ा जाता है.


## Examples

### Example #1 
नव वर्ष के दिन (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) से 5 मिनट पहले प्रारंभ होने वाले 10 मानों, 1 मिनट (#duration(0, 0, 1, 0)) बढ़ते हुए, की एक सूची बनाएँ.
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
