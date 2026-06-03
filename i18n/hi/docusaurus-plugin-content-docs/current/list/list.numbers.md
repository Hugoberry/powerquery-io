---
title: List.Numbers
---

# List.Numbers


संख्याओं की सूची लौटाता है जिसमें प्रारंभिक मान, गणना और वैकल्पिक वृद्धि अवधि मान दिया जाता है.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

संख्याओं की सूची लौटाता है जिसमें प्रारंभिक मान, गणना और वैकल्पिक वृद्धि अवधि मान दिया जाता है. डिफ़ॉल्ट वृद्धि मान 1 है.

-   `start`: सूची में प्रारंभिक मान.
-   `count`: बनाए जाने वाले मानों की संख्या.
-   `increment`: *(वैकल्पिक)* इसके द्वारा वृद्धि किए जाने वाले मान. अगर छोड़ दिया जाए, तो मानों में 1 के अंतर से वृद्धि की जाती है.


## Examples

### Example #1
1 से प्रारंभ 10 क्रमिक संख्याओं की एक सूची जनरेट करें.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
1 से प्रारंभ 10 संख्याओं की एक सूची जनरेट करें जिसकी प्रत्येक अनुवर्ती संख्या में 2 की वृद्धि हो.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
