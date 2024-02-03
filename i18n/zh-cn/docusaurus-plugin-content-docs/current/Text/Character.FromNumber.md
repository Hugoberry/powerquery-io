---
title: Character.FromNumber
---

# Character.FromNumber


## Description

将数字转换为文本字符。


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

返回等效于数字的字符。<br />    <br />    提供的 <code>number</code> 应为 21 位 Unicode 码位。


## Examples

### Example #1 
将某个数字转换为其等效字符值。
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
将字符转换为数字，再转换回字符。
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
将“露齿笑的脸”表情符号的十六进制码位转换为等效的 UTF-16 代理项对。
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
