---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

İki sayıyı böler ve sonucun tamsayı kısmını döndürür.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

<code>number1</code> sayısını başka bir <code>number2</code> sayısına bölme işlemi sonucunun tamsayı kısmını döndürür.    <code>number1</code> veya <code>number2</code> null ise <code>Number.IntegerDivide</code> null döndürür.      <ul>        <li><code>number1</code>: Bölünen.</li>        <li><code>number2</code>: Bölen.</li>      </ul>


## Examples

### Example #1 
6&#39;yı 4&#39;e böler.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
8.3&#39;ü 3&#39;e böler.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
