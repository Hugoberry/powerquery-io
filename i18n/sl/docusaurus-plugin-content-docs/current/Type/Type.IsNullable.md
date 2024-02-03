---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Vrne vrednost &#34;true&#34;, če gre za ničelno vrsto, v nasprotnem primeru pa &#34;false&#34;.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Vrne <code>true</code>, če gre za <code>ničelno</code> vrsto; v nasprotnem primeru pa <code>false</code>.


## Examples

### Example #1 
Določite, ali ima &lt;code&gt;število&lt;/code&gt; ničelno vrednost.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Določite, ali ima &lt;code&gt;število z ničelno vrednostjo&lt;/code&gt; lahko vrednost nič.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
