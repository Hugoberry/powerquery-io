---
title: Number.Power
---

# Number.Power


## Description

求數字的指定次方。


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

傳回 <code>number</code> 的 <code>power</code> 次方結果。     如果 <code>number</code> 或 <code>power</code> 是 Null，<code>Number.Power</code> 會傳回 Null。      <ul>        <li><code>number</code>: 底數。</li>        <li><code>power</code>: 指數。</li>      </ul>


## Examples

### Example #1 
找出值 5 的 3 次方 (5 的立方)。
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
