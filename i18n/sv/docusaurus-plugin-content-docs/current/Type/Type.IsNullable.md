---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Returnerar sant om en typ är en nullbar typ; i annat fall returneras falskt.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Returnerar <code>true</code> om typen är en <code>nullable</code> typ; i annat fall returneras <code>false</code>.


## Examples

### Example #1 
Bestäm om &lt;code&gt;number&lt;/code&gt; är nullbar.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Bestäm om &lt;code&gt;type nullable number&lt;/code&gt; är nullbar.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
