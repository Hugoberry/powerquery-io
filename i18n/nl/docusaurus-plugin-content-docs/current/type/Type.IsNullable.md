---
title: Type.IsNullable
---

# Type.IsNullable


Retourneert &#39;true&#39; indien voor een type een null-waarde is toegestaan; anders wordt &#39;false&#39; geretourneerd.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Retourneert <code>true</code> indien voor een type een <code>null-waarde is toegestaan</code>; anders wordt <code>false</code> geretourneerd.


## Examples

### Example #1 
Bepaal of voor &lt;code&gt;getal&lt;/code&gt; een null-waarde is toegestaan.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Bepaal of voor &lt;code&gt;type getal waarvoor null-waarde is toegestaan&lt;/code&gt; een null-waarde is toegestaan.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
