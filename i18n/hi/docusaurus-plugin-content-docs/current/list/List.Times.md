---
title: List.Times
---

# List.Times


समय मानों की सूची जनरेट करता है जिसमें प्रारंभिक मान, गणना और वृद्धिशील अवधि मान दिया होता है.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

<code>start</code> से प्रारंभ होने वाले, आकार <code>count</code> के <code>time</code> मानों की सूची लौटाता है. दी गई वृद्धि, <code>step</code>, एक <code>duration</code> मान है जिसे प्रत्येक मान में जोड़ा जाता है.


## Examples

### Example #1 
एक घंटा (#duration(0, 1, 0, 0)) की वृद्धि करते हुए दोपहर (#time(12, 0, 0)) से शुरू करके 4 मानों की एक सूची बनाएँ.
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
