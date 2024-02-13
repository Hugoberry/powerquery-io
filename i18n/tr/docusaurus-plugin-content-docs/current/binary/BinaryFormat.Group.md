---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Bir öğe grubunu okuyan ikili biçimi döndürür.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Parametreler şu şekildedir:<ul><li><code>binaryFormat</code> parametresi, anahtar değerinin ikili biçimini belirtir.</li><li><code>group</code> parametresi, bilinen öğeler grubu hakkında bilgi verir.</li><li>İsteğe bağlı <code>extra</code> parametresi, beklenmeyen herhangi bir anahtarı takip eden değer için ikili bir biçim değeri döndürecek olan bir işlevin belirtilmesine yönelik kullanılabilir.  <code>extra</code> parametresi belirtilmezse, beklenmeyen anahtar değerlerin olması durumunda bir hata oluşur.</li></ul><code>group</code> parametresi, öğe tanımlarının bir listesini belirtir.  Her öğe tanımı aşağıdaki gibi 3-5 değer içeren bir listedir:<ul><li>Anahtar değer.  Anahtarın, öğeye karşılık gelen değeri.  Bu, öğeler kümesinde benzersiz olmalıdır.</li><li>Öğe biçimi.  Öğenin değerine karşılık gelen ikili biçim.  Bu, her öğenin farklı bir biçime sahip olmasını sağlar. </li><li>Öğe yinelemesi.  Öğenin, grupta kaç kez görünmesinin beklendiğine ilişkin <code>BinaryOccurrence.Type</code> değeri.   Mevcut olmayan gerekli öğeler hataya neden olur.  Gerekli veya isteğe bağlı yinelenen öğeler, beklenmeyen anahtar değerler gibi işlenir.</li><li>Varsayılan öğe değeri (isteğe bağlı).  Varsayılan öğe değeri, öğe tanımlama listesinde görünüyorsa ve null değilse varsayılanın yerine kullanılır.  Tekrarlayan veya isteğe bağlı öğeler için varsayılan değer null, tekrarlayan değerler için de boş bir listedir \{ }.</li><li>Öğe değeri dönüştürme (isteğe bağlı).   Öğe değeri dönüştürme işlevi, öğe tanımı listesinde mevcutsa ve null değilse döndürülmeden önce öğeyi dönüştürmesi için çağrılır.  Dönüştürme işlevi yalnızca öğe girişte görünüyorsa çağrılır (varsayılan değerle hiçbir zaman çağrılmaz). </li></ul>


## Examples

### Example #1 
Aşağıdaki ifade, grupta tümü anahtarı izleyen bir baytlık veri içeren 4 beklenen öğeye sahip tek baytlık bir anahtar değerini varsayar.  Öğeler girdide şu sırayla görünür:&lt;ul&gt;&lt;li&gt; Anahtar 1 gerekir ve 11 değeriyle görünür.&lt;/li&gt;&lt;li&gt;Anahtar 2 tekrarlanır ve 22 değeriyle iki kez görünür ve \{ 22, 22 } değeriyle sonuçlanır.&lt;/li&gt;&lt;li&gt;Anahtar 3 isteğe bağlıdır ve görünmez, null değeriyle sonuçlanır.&lt;/li&gt;&lt;li&gt;Anahtar 4 tekrarlanır, ancak görünmez ve \{ } değeriyle sonuçlanır.&lt;/li&gt;&lt;li&gt;Anahtar 5 grubun parçası değildir, ancak 55 değeri ile bir kez görünür.  Ek işlev 5 anahtar değeri ile çağrılır ve bu değere karşılık gelen biçimi döndürür (BinaryFormat.Byte).  55 değeri okunur ve atılır.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
Aşağıdaki örnek, öğe değer dönüşümünü ve varsayılan öğe değerini gösterir.   Anahtar 1&#39;i içeren yinelenen öğe, List.Sum işlevini kullanarak okunan değerlerin listesini toplar.  Anahtar 2&#39;yi içeren isteğe bağlı öğe, null yerine 123 varsayılan değerine sahiptir.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
