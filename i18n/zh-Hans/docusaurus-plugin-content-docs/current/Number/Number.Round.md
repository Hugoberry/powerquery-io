---
title: Number.Round
---

# Number.Round


返回舍入的数。可以指定位数和舍入模式。


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

返回将 <code>number</code> 四舍五入到最接近的数的结果。如果 <code>number</code> 为 null，则 <code>Number.Round</code> 返回 null。<br />      <br />      默认情况下，<code>number</code> 舍入到最接近的整数，并通过舍入到最接近的偶数(使用 <code>RoundingMode.ToEven</code>，也称为“银行家舍入法”)断开联系。<br />      <br />      但可通过以下可选参数覆盖这些默认值。      <ul>        <li><code>digits</code>: 导致 <code>number</code> 四舍五入到指定的小数位数.</li>        <li><code>roundingMode</code>: 在 <code>number</code> 位于两个可能的舍入值之间的中间点时，替代默认的断开联系行为       (有关可能值的信息，请参阅 <code>RoundingMode.Type</code>)。</li>      </ul>


## Examples

### Example #1 
将 1.234 舍入到最近的整数。
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
将 1.56 舍入到最近的整数。
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
将 1.2345 舍入为包含两位小数。
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
将 1.2345 舍入为包含三位小数(向上舍入)。
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
将 1.2345 舍入为包含三位小数(向下舍入)。
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
