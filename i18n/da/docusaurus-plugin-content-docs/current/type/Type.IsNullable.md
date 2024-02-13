---
title: Type.IsNullable
---

# Type.IsNullable


Returnerer true, hvis typen kan være null. Ellers returneres false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Returnerer <code>true</code>, hvis typen er <code>nullable</code>. Ellers returneres <code>false</code>.


## Examples

### Example #1 
Bestem, om &lt;code&gt;number&lt;/code&gt; kan være null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Bestem, om &lt;code&gt;type nullable number&lt;/code&gt; kan være null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
