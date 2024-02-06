---
title: Currency.From
---

# Currency.From


從給定的值傳回貨幣值。


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

從指定的 <code>value</code> 傳回 <code>currency</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Currency.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是貨幣範圍內的 <code>number</code>，則會將 <code>value</code> 的小數點位數部分四捨五入成 4 個小數位數並傳回。若指定的 <code>value</code> 是任何其他類型，則會先使用 <code>Number.FromText</code> 將其轉換成 <code>number</code>。貨幣的有效範圍是 <code>-922,337,203,685,477.5808</code> 到 <code>922,337,203,685,477.5807</code>。如需可用的四捨五入模式，請參閱 <code>Number.Round</code>。預設為 <code>RoundingMode.ToEven</code>。也可能會提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得 &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; 的 &lt;code&gt;currency&lt;/code&gt; 值。
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
使用 &lt;code&gt;RoundingMode.Down&lt;/code&gt; 取得 &lt;code&gt;currency&lt;/code&gt; 值 &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;。
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
