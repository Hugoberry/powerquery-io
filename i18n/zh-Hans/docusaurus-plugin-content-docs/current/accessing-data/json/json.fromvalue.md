---
title: Json.FromValue
---

# Json.FromValue


生成给定值的 JSON 表示形式。


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

使用由 `encoding` 指定的文本编码生成给定值 `value` 的 JSON 表示形式。如果省略 `encoding`，则使用 UTF8。值的表示形式如下:

-   Null、文本和逻辑值表示为相应的 JSON 类型
-   数字表示为 JSON 形式的数字，除非 `#infinity`、`-#infinity` 和 `#nan` 均转换为 null
-   列表表示为 JSON 数组
-   记录表示为 JSON 对象
-   表表示为对象的数组
-   日期、时间、日期时间、日期时间时区和持续时间表示为 ISO-8601 文本
-   二进制值表示为 Base64 编码文本
-   类型和函数将生成错误


## Examples

### Example #1
将复杂值转换为 JSON。
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
