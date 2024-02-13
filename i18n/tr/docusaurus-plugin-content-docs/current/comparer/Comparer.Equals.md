---
title: Comparer.Equals
---

# Comparer.Equals


Verilen iki değer üzerinde yapılan eşitlik kontrolüne bağlı olarak mantıksal bir değer döndürür.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Sağlanan <code>comparer</code> öğesini kullanarak <code>x</code> ve <code>y</code> olmak üzere verilen iki değer üzerinde gerçekleştirilen eşitlik kontrolüne göre <code>mantıksal</code> bir değer döndürür.           <div>       <code>comparer</code>, karşılaştırmanın denetlenmesi için kullanılan bir <code>Karşılaştırıcıdır</code>.       Karşılaştırıcı, iki bağımsız değişken kabul eden ve ilk değerin ikinci değerden küçük, ona eşit veya ikinciden büyük olup olmadığını temel alarak -1, 0 veya 1 döndüren bir işlevdir.       Karşılaştırıcılar, büyük/küçük harfe duyarlı olmayan veya kültüre ve yerel ayara duyarlı karşılaştırmaların sağlanması için kullanılabilir.           </div>     <div>        Aşağıdaki yerleşik karşılaştırıcılar formül dilinde kullanılabilir:      </div>      <ul>       <li><code>Comparer.Ordinal</code>: Tam sıralı karşılaştırma gerçekleştirilmek için kullanılır</li>     <li><code>Comparer.OrdinalIgnoreCase</code>: Tam sıralı büyük/küçük harfe duyarlı olmayan karşılaştırma gerçekleştirmek için kullanılır</li>     <li> <code>Comparer.FromCulture</code>: Kültüre duyarlı karşılaştırma gerçekleştirmek için kullanılır</li>     </ul>


## Examples

### Example #1 
Değerlerin eşit olup olmadığını belirlemek için &#34;en-US&#34; yerel ayarını kullanarak &#34;1&#34; ve &#34;A&#34; karşılaştırması yapın.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
