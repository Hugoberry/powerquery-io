---
title: List.AllTrue
---

# List.AllTrue


Retourneert &#39;true&#39; wanneer alle expressies &#39;true&#39; zijn.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Retourneert 'true' wanneer alle expressies in de lijst <code>list</code> 'true' zijn.


## Examples

### Example #1 
Vaststellen of alle expressies in de lijst \{true, true, 2 &gt; 0} &#39;true&#39; zijn.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Vaststellen of alle expressies in de lijst \{true, true, 2 &lt; 0} &#39;true&#39; zijn.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
