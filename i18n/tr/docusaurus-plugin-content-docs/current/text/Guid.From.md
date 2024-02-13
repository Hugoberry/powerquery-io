---
title: Guid.From
---

# Guid.From


Verilen değerden bir guid değeri döndürür.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Verilen <code>value</code> değerinden bir <code>Guid.Type</code> değeri döndürür. Verilen <code>value</code> <code>null</code> olduğunda <code>Guid.From</code>, <code>null</code> değerini döndürür. Verilen <code>value</code> değerinin kabul edilebilir bir biçimde olup olmadığını saptamak için bir denetim gerçekleştirilecektir. Kabul edilebilir biçimler örneklerde verilmiştir.


## Examples

### Example #1 
Guid, 32 bitişik onaltılık basamak olarak sağlanabilir.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Guid, kısa çizgi ile ayrılmış 8-4-4-4-12&#39;lik bloklarda 32 onaltılık basamak olarak sağlanabilir.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Guid, kısa çizgi ile ayrılmış ve küme ayraçları ile kapatılmış 32 onaltılık basamak olarak sağlanabilir.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Guid, kısa çizgilerle ayrılmış ve parantez ile kapatılan 32 onaltılık basamak olarak sağlanabilir.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
