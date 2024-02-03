---
title: Number.Round
---

# Number.Round


## Description

丸めた数値を返します。桁数と丸めモードを指定できます。


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

最も近い数に <code>number</code> を端数処理した結果を返します。<code>number</code> が null の場合、<code>Number.Round</code>は null を返します。<br />      <br />      既定では、<code>number</code> は最も近い整数に端数処理され、<code>RoundingMode.ToEven</code> (別名"銀行家の丸め") を使用して最も近い偶数に端数処理されることにより結びつきはなくなります。<br />      <br />      ただしこれらの既定は、次のオプションのパラメーターを使用してオーバーライドできます。      <ul>        <li><code>digits</code>:これにより、<code>number</code>は指定された少数桁の数に端数処理されます。</li>        <li><code>roundingMode</code>: <code>number</code> が端数処理された可能性のある 2 つの値の中間にある場合、既定の結びつきをなくす動作をオーバーライドします      (使用可能な値については、<code>RoundingMode.Type</code> を参照してください).。</li>      </ul>


## Examples

### Example #1 
1.234 を最も近い整数に丸めます。
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
1.56 を最も近い整数に丸めます。
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
1.2345 を小数点以下が 2 桁になるように丸めます。
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
1.2345 を小数点以下が 3 桁になるように丸めます (切り上げ)。
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
1.2345 を小数点以下が 3 桁になるように丸めます (切り下げ)。
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
