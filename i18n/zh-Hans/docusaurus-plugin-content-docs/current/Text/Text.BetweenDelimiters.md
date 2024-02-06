---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

返回 <code>text</code> 中位于指定的 <code>startDelimiter</code> 和 <code>endDelimiter</code> 之间的部分。    可选数字 <code>startIndex</code> 指示要考虑哪一次出现的 <code>startDelimiter</code>。    可选列表 <code>startIndex</code> 指示要考虑哪一次出现的 <code>startDelimiter</code>，以及应从输入的开头还是结尾编制索引。    <code>endIndex</code> 类似，不同之处在于，相对于 <code>startIndex</code> 编制索引。


## Examples

### Example #1 
获取 &#34;111 (222) 333 (444)&#34; (第一个)左括号及其随后(第一个)右括号之间的部分。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
获取 &#34;111 (222) 333 (444)&#34; 第二个左括号及其随后第一个右括号之间的部分。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
获取 &#34;111 (222) 333 (444)&#34; 倒数第二个左括号及其随后第二个右括号之间的部分。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
