---
title: Currency.From
---

# Currency.From


Verilen değerden bir para birimi değeri döndürür.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Verilen `value` değerinden bir `currency` değeri döndürür. Verilen `value` değeri `null` olduğunda `Currency.From` `null` döndürür. Verilen `value`, para birimi aralığında `number` olduğunda `value` değerinin kesir kısmı, 4 basamaklı bir ondalık sayıya yuvarlanarak döndürülür. `value` başka bir türde olduğunda önce `Number.FromText` kullanılarak `number` türüne dönüştürülür. Para birimi için geçerli aralık `-922.337.203.685.477,5808` - `922.337.203.685.477,5807` aralığıdır. Kullanılabilir yuvarlama modları için bkz. `Number.Round`. Varsayılan mod `RoundingMode.ToEven` modudur. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör. "tr-TR").


## Examples

### Example #1
`"1.23455"` değerinin `currency` değerini alın.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
`RoundingMode.Down` kullanarak `"1.23455"` değerinin `currency` değerini alın.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
