---
title: Type.RecordFields
---

# Type.RecordFields


傳回記錄，說明具有已傳回記錄類型的每個資料行的記錄類型都有相對應的名稱和值。


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

傳回記錄，說明記錄 <code>type</code> 的欄位。傳回之記錄類型的每個欄位都有其對應名稱與值，並會以下列記錄格式表示: <code>[ Type = type, Optional = logical ]</code>。


## Examples

### Example #1 
尋找記錄 &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; 的名稱和值。
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
