---
title: List.Accumulate
---

# List.Accumulate


## Description

सूची के आइटमों से एक सारांश मान एकत्रित करता है.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

<code>accumulator</code> का उपयोग करके सूची <code>list</code>, के आइटमों से एक सारांश मान एकत्रित करता है.    एक वैकल्पिक मूल पैरामीटर, <code>seed</code>, सेट हो सकता है.


## Examples

### Example #1 
((state, current) =&gt; state + current ) का उपयोग करके सूची \{1, 2, 3, 4, 5} के आइटमों से सारांश मान एकत्रित करता है .
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
