---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Возвращает текстовое представление значения datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Возвращает текстовое представление <code>dateTimeZone</code>. При необходимости можно задать необязательный параметр <code>options</code> типа <code>record</code> для указания дополнительных свойств. Параметр <code>culture</code> используется только для рабочих процессов прежних версий. В состав <code>record</code> могут входить следующие поля:<ul>   <li><code>Format</code>. Значение типа <code>text</code>, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если пропустить это поле или указать <code>NULL</code>, будет использован формат даты по умолчанию, заданный в <code>Culture</code>.</li>   <li><code>Culture</code>: если <code>Format</code> не имеет значения NULL, <code>Culture</code> управляет определенными спецификаторами формата. Например, при использовании <code>"en-US"</code> значение <code>"MMM"</code> представляется как <code>"Jan", "Feb", "Mar", …</code>, тогда как для <code>"ru-RU"</code> значение <code>"MMM"</code> выглядит как <code>"янв", "фев", "мар", …</code>. Если <code>Format</code> имеет значение <code>NULL</code>, <code>Culture</code> задает формат, используемый по умолчанию. Если значение <code>Culture</code> равно <code>NULL</code> или пропущено, используется <code>Culture.Current</code>.</li></ul>Для поддержки прежних версий рабочих процессов <code>options</code> и <code>culture</code> также могут быть текстовыми значениями. При этом происходит то же самое, что и при <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Преобразование &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; в значение &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Результат может зависеть от текущего языка и региональных параметров.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Преобразование с помощью шаблона ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
