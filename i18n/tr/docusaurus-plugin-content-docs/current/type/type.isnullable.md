---
title: Type.IsNullable
---

# Type.IsNullable


Bir tür boş değer atanabilir türde ise true değerini döndürür; aksi takdirde false değerini döndürür.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Bir tür <code>nullable</code> tipinde ise <code>true</code> değerini döndürür; aksi takdirde <code>false</code> değerini döndürür.


## Examples

### Example #1 
&lt;code&gt;number&lt;/code&gt; değerinin boş değer atanabilir türde olup olmadığını belirleyin.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
&lt;code&gt;type nullable number&lt;/code&gt; değerinin boş değer atanabilir türde olup olmadığını belirleyin.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
