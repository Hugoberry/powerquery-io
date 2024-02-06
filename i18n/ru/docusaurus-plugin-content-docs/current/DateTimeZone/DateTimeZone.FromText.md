---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Создание datetimezone из локальных, универсальных и пользовательских форматов datetimezone.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Создает значение <code>datetimezone</code> из текстового представления <code>text</code>. При необходимости можно задать необязательный параметр <code>options</code> типа <code>record</code> для указания дополнительных свойств. В состав <code>record</code> могут входить следующие поля:<ul>   <li><code>Format</code>. Значение типа <code>text</code>, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если пропустить это поле или указать <code>NULL</code>, распознавание даты будет выполняться по принципу наилучшего возможного варианта.</li>   <li><code>Culture</code>: если <code>Format</code> не имеет значения NULL, <code>Culture</code> управляет определенными спецификаторами формата. Например, при использовании <code>"en-US"</code> значение <code>"MMM"</code> представляется как <code>"Jan", "Feb", "Mar", …</code>, тогда как для <code>"ru-RU"</code> значение <code>"MMM"</code> выглядит как <code>"янв", "фев", "мар", …</code>. Если <code>Format</code> имеет значение <code>NULL</code>, <code>Culture</code> задает формат, используемый по умолчанию. Если значение <code>Culture</code> равно <code>NULL</code> или пропущено, используется <code>Culture.Current</code>.</li></ul>Для поддержки прежних версий рабочих процессов <code>options</code> также может быть текстовым значением. При этом происходит то же самое, что и при <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Преобразование &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; в значение &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Преобразование с помощью ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
