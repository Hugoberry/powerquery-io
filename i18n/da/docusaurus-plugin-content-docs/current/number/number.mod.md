---
title: Number.Mod
---

# Number.Mod


Heltallet dividerer to tal og returnerer resten.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnerer den rest, der er tilbage efter at have divideret <code>number</code> med <code>divisor</code> for et heltal.    Hvis <code>number</code> eller <code>divisor</code> er null, returnerer <code>Number.Mod</code> null.      <ul>        <li><code>number</code>: Dividenden.</li>        <li><code>divisor</code>: Divisoren.</li>      </ul>


## Examples

### Example #1 
Find resten, når du dividerer 5 med 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
