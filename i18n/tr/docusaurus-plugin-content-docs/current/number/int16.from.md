---
title: Int16.From
---

# Int16.From


Verilen değerden 16 bit tam sayı oluşturur.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Verilen `value` değerinden 16 bitlik bir tamsayı `number` değeri döndürür. Verilen `value` değeri `null` olduğunda, `Int16.From` `null` döndürür. Verilen `value` değeri kesirli kısmı olmayan 16 bitlik tamsayı aralığında bir `number` olduğunda `value` döndürülür. Kesirli kısmı varsa, sayı belirtilen yuvarlama moduyla yuvarlanır. Varsayılan yuvarlama modu `RoundingMode.ToEven` modudur. `value` başka herhangi bir türde olduğunda, önce `Number.FromText` kullanılarak `number` türüne dönüştürülür. Kullanılabilir yuvarlama modları için bkz. `Number.Round`. Ayrıca isteğe bağlı `culture` sağlanabilir (örneğin, "tr-TR").


## Examples

### Example #1
`"4"` değerinin 16 bit tam sayı `number` değerini verir.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` kullanıldığında `"4.5"` değerinin 16 bit tam sayı `number` değerini verir.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
