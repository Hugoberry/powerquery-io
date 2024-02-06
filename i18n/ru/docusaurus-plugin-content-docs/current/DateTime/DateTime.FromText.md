---
title: DateTime.FromText
---

# DateTime.FromText


Создает значение datetimezone из локальных и всеобщих форматов даты и времени.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Создает значение <code>datetime</code> из текстового представления <code>text</code>. При необходимости можно задать необязательный параметр <code>options</code> типа <code>record</code> для указания дополнительных свойств. В состав <code>record</code> могут входить следующие поля:<ul>   <li><code>Format</code>. Значение типа <code>text</code>, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если пропустить это поле или указать <code>NULL</code>, распознавание даты будет выполняться по принципу наилучшего возможного варианта.</li>   <li><code>Culture</code>: если <code>Format</code> не имеет значения NULL, <code>Culture</code> управляет определенными спецификаторами формата. Например, при использовании <code>"en-US"</code> значение <code>"MMM"</code> представляется как <code>"Jan", "Feb", "Mar", …</code>, тогда как для <code>"ru-RU"</code> значение <code>"MMM"</code> выглядит как <code>"янв", "фев", "мар", …</code>. Если <code>Format</code> имеет значение <code>NULL</code>, <code>Culture</code> задает формат, используемый по умолчанию. Если значение <code>Culture</code> равно <code>NULL</code> или пропущено, используется <code>Culture.Current</code>.</li></ul>Для поддержки прежних версий рабочих процессов <code>options</code> также может быть текстовым значением. При этом происходит то же самое, что и при <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Преобразование &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; в значение даты и времени.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Преобразование &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; в значение даты и времени.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Преобразование &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; в значение даты и времени.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Преобразование &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; в значение даты и времени.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
