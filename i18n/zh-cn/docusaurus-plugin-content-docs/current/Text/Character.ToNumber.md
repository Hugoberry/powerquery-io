---
title: Character.ToNumber
---

# Character.ToNumber


## Description

将某个字符转换为数值。


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

返回等效于 <code>character</code> 的数字。<br />    <br />    结果将是由提供的字符或代理项对代表的 21 位 Unicode 码位。  


## Examples

### Example #1 
将某个字符转换其等效数值。
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
将“露齿笑的脸”表情符号的 UTF-16 代理项对转换为等效的十六进制码位。
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
