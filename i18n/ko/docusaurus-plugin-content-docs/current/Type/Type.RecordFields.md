---
title: Type.RecordFields
---

# Type.RecordFields


## Description

반환되는 레코드 형식의 각 필드에 해당하는 이름 및 값이 지정되어 있으며 레코드 형식의 필드에 대해 설명하는 레코드를 반환합니다.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

레코드 <code>type</code>의 필드에 대해 설명하는 레코드를 반환합니다. 반환되는 레코드 형식의 각 필드에는 해당하는 이름 및 값이 레코드 <code>[ Type = type, Optional = logical ]</code>의 형식으로 지정되어 있습니다.


## Examples

### Example #1 
레코드 &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;의 이름 및 값을 확인합니다.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
