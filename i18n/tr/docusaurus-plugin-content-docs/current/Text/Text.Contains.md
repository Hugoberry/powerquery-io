---
title: Text.Contains
---

# Text.Contains


## Description

Metnin alt dizeyi içerip içermediğini döndürür.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

<code>text</code> öğesinin <code>substring</code> değerini içerip içermediğini algılar. Değer bulunursa true döndürür. Bu işlev, joker karakterleri ve normal ifadeleri desteklemez.      <br />      <br />      Büyük/küçük harfe duyarsız ya da kültüre ve yerel ayara duyarlı karşılaştırmalar belirtmek için isteğe bağlı <code>comparer</code> bağımsız değişkeni kullanılabilir.      Şu yerleşik karşılaştırıcılar formül dilinde kullanılabilir:      <ul>        <li><code>Comparer.Ordinal</code>: Büyük/küçük harfe duyarlı sıralı karşılaştırma gerçekleştirmek için kullanılır</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Büyük/küçük harfe duyarsız sıralı karşılaştırma gerçekleştirmek için kullanılır</li>        <li> <code>Comparer.FromCulture</code>: Kültüre duyarlı karşılaştırma gerçekleştirmek için kullanılır</li>      </ul>


## Examples

### Example #1 
&#34;Hello World&#34; metninin &#34;Hello&#34; ifadesini içerip içermediğini bulur.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
&#34;Hello World&#34; metninin &#34;hello&#34; ifadesini içerip içermediğini bulur.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Büyük/küçük harfe duyarsız karşılaştırma kullanarak &#34;Merhaba Dünya&#34; metninin &#34;merhaba&#34; sözcüğünü içerip içermediğini bulun.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
