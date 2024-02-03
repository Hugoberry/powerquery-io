---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Označuje, ali je vrednost &#34;NaN&#34; (ni število).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Označuje, ali je vrednost "NaN" (ni število). Vrne <code>true</code>, če je <code>number</code> enako <code>Number.IsNaN</code>, sicer vrne <code>false</code>.


## Examples

### Example #1 
Preverite, ali je 0 deljeno z 0 &#34;NaN&#34;.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Preverite, ali je 1 deljeno z 0 &#34;NaN&#34;.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
