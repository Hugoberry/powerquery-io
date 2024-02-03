---
title: Number.Round
---

# Number.Round


## Description

Yuvarlanmış sayıyı döndürür. Basamak sayısı ve yuvarlama modu belirtilebilir.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

<code>number</code> değerini en yakın sayıya yuvarlamanın sonucunu döndürür. <code>number</code> null olduğunda <code>Number.Round</code> null döndürür.<br />      <br />      <code>number</code>, varsayılan olarak en yakın tamsayıya yuvarlanır ve <code>RoundingMode</code> ("bankacı yuvarlaması" olarak da bilinir) kullanılıp en yakın sayıya yuvarlanarak eşitlikler bozulur<br />      <br />      ancak bu varsayılanlar, aşağıdaki isteğe bağlı parametreler aracılığıyla geçersiz kılınabilir.      <ul>        <li><code>digits</code>, <code>number</code> değerini belirtilen ondalık basamağa yuvarlar.</li>        <li><code>roundingMode</code>, <code>number</code> değeri iki olası yuvarlanan değer arasında olduğunda varsayılan eşitlik bozma davranışını geçersiz kılar.      (olası değerler için bkz. <code>RoundingMode.Type</code>)</li>      </ul>


## Examples

### Example #1 
1,234 değerini en yakın tamsayıya yuvarlar.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
1,56 değerini en yakın tamsayıya yuvarlar.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
1,2345 değerini iki ondalık basamak içerecek şekilde yuvarlar.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
1,2345 değerini üç ondalık basamak içerecek şekilde yuvarlayın (yukarı yuvarlayarak).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
1,2345 değerini üç ondalık basamak içerecek şekilde yuvarlayın (aşağı yuvarlayarak).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
