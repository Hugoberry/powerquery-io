---
title: Int8.From
---

# Int8.From


Verilen değerden işaretli 8 bit tam sayı oluşturur.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Verilen `value` değerinden 8 bitlik bir işaretli tamsayı `number` değeri döndürür. Verilen `value` değeri `null` olduğunda, `Int8.From` `null` döndürür. Verilen `value` değeri kesirli kısmı olmayan 8 bitlik işaretli tamsayı aralığında bir `number` olduğunda `value` döndürülür. Kesirli kısmı varsa, sayı belirtilen yuvarlama moduyla yuvarlanır. Varsayılan yuvarlama modu `RoundingMode.ToEven` modudur. `value` başka herhangi bir türde olduğunda, önce `Number.FromText` kullanılarak `number` türüne dönüştürülür. Kullanılabilir yuvarlama modları için bkz. `Number.Round`. Ayrıca isteğe bağlı `culture` sağlanabilir (örneğin, "tr-TR").


## Examples

### Example #1
`"4"` değerinin işaretli 8 bit tam sayı `number` değerini verir.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` kullanıldığında `"4.5"` değerinin işaretli 8 bit tam sayı `number` değerini verir.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
