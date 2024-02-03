---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Түр нөлдік түрде болса, оң мәнді береді, олай болмаса, теріс мәнді береді.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Түр <code>нөлдік</code> түрде болса, <code>оң мәнді</code> береді; олай болмаса, <code>теріс мәнді</code> береді.


## Examples

### Example #1 
&lt;code&gt;Санның&lt;/code&gt; нөл екендігін анықтаңыз.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
&lt;code&gt;Түрдің нөлдік саны&lt;/code&gt; нөл екендігін анықтыңыз.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
