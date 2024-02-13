---
title: Time.FromText
---

# Time.FromText


Создает значение времени с применением локальных, универсальных и пользовательских форматов времени.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Создает значение <code>time</code> из текстового представления <code>text</code>. При необходимости можно задать необязательный параметр <code>options</code> типа <code>record</code> для указания дополнительных свойств. В состав <code>record</code> могут входить следующие поля:<ul>   <li><code>Format</code>. Значение типа <code>text</code>, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если пропустить это поле или указать <code>NULL</code>, распознавание времени будет выполняться по принципу наилучшего возможного варианта.</li>   <li><code>Culture</code>: если <code>Format</code> не имеет значения NULL, <code>Culture</code> управляет определенными спецификаторами формата. Например, при использовании <code>"en-US"</code> значение <code>"tt"</code> представляется как <code>"AM" или "PM"</code>, тогда как для <code>"ar-EG"</code> значение <code>"tt"</code> выглядит как <code>"ص" или "م"</code>. Если <code>Format</code> имеет значение <code>NULL</code>, <code>Culture</code> задает формат, используемый по умолчанию. Если значение <code>Culture</code> равно <code>NULL</code> или пропущено, используется <code>Culture.Current</code>.</li></ul>Для поддержки прежних версий рабочих процессов <code>options</code> также может быть текстовым значением. При этом происходит то же самое, что и при <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Преобразовать &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; в значение времени.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Преобразование &lt;code&gt;&#34;1012&#34;&lt;/code&gt; в значение Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Преобразование &lt;code&gt;&#34;10&#34;&lt;/code&gt; в значение Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
