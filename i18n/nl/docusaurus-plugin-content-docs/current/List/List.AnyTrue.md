---
title: List.AnyTrue
---

# List.AnyTrue


Retourneert &#39;true&#39; wanneer een bepaalde expressie &#39;true&#39; is.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Retourneert 'true' wanneer een bepaalde expressie in de lijst <code>list</code> 'true' is.


## Examples

### Example #1 
Vaststellen of een van de expressies in de lijst \{true, false, 2 &gt; 0} &#39;true&#39; is.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Vaststellen of een van de expressies in de lijst \{2 = 0, false, 2 &lt; 0} &#39;true&#39; is.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
