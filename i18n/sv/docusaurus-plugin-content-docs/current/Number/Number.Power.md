---
title: Number.Power
---

# Number.Power


Upphöjer ett tal till angivet tal.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Returnerar resultatet från att <code>number</code> upphöjs till <code>power</code>.    Om <code>number</code> eller <code>power</code> är null returnerar <code>Number.Power</code> null.      <ul>        <li><code>number</code>: Basen.</li>        <li><code>power</code>: Exponenten.</li>      </ul>


## Examples

### Example #1 
Hitta värdet 5 upphöjt till 3 (5 i kubik).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
