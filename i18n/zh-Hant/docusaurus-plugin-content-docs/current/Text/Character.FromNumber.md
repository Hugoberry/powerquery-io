---
title: Character.FromNumber
---

# Character.FromNumber


將數字轉換成文字字元。


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

傳回數字的同等字元。<br />    <br />    提供的 <code>number</code> 應該為 21 位元 Unicode 字碼元素。


## Examples

### Example #1 
將數字轉換成其同等字元值。
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
將字元轉換成數字，然後再次轉換回來。
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
將「露齒笑的臉」表情符號的十六進位字碼元素轉換成其同等的 UTF-16 代理字組。
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
