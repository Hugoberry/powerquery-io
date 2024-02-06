---
title: Number.Round
---

# Number.Round


傳回四捨五入的數字。可指定位數和四捨五入模式。


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

傳回將 <code>number</code> 四捨五入成最接近之數字後的結果。若 <code>number</code> 為 null，則 <code>Number.Round</code> 會傳回 null。<br />      <br />      根據預設，<code>number</code> 會四捨五入成最接近的整數，並藉由四捨五入成最接近的偶數來中斷繫結 (使用 <code>RoundingMode.ToEven</code>，也稱為「四捨六入五成雙」)。<br />      <br />      然而，這些預設值可能會透過下列選用的參數進行覆寫。      <ul>        <li><code>digits</code>: 導致 <code>number</code> 四捨五入成十進位數字的特定數字。</li>        <li><code>roundingMode</code>: 當 <code>number</code> 位於兩個可能已四捨五入之值的中點時，覆寫預設的繫結中斷行為      (如需可能的值，請參閱 <code>RoundingMode.Type</code>)。</li>      </ul>


## Examples

### Example #1 
將 1.234 四捨五入到最接近的整數。
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
將 1.56 四捨五入到最接近的整數。
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
將 1.2345 四捨五入成兩位小數位數。
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
將 1.2345 四捨五入成三位小數位數 (向上捨入)。
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
將 1.2345 四捨五入成三位小數位數 (向下捨入)。
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
