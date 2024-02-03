---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Vrací hodnotu true, pokud jde o typ, který může mít hodnotu null (může být nullable); jinak vrací hodnotu false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Vrací hodnotu <code>true</code>, pokud jde o typ, který může mít hodnotu null (může být <code>nullable</code>); jinak vrací hodnotu <code>false</code>.


## Examples

### Example #1 
Určí, jestli číslo (&lt;code&gt;number&lt;/code&gt;) může mít hodnotu null (může být nullable).
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Určí, jestli číslo, které může mít typ s hodnotou null (&lt;code&gt;type nullable number&lt;/code&gt;), může mít hodnotu null (nullable).
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
