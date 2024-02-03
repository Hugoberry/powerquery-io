---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Retourneert het type waarvoor geen null-waarde is toegestaan voor een type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Retourneert het type waarvoor geen <code>null-waarde is toegestaan</code> voor <code>type</code>.


## Examples

### Example #1 
Retourneert het type waarvoor geen null-waarde is toegestaan van het &lt;code&gt;type getal waarvoor null-waarde is toegestaan&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
