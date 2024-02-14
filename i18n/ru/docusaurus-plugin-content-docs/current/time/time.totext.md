---
title: Time.ToText
---

# Time.ToText


Возвращает текстовое представление значения времени.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Возвращает текстовое представление <code>time</code>. При необходимости можно задать необязательный параметр <code>options</code> типа <code>record</code> для указания дополнительных свойств. Параметр <code>culture</code> используется только для рабочих процессов прежних версий. В состав <code>record</code> могут входить следующие поля:<ul>   <li><code>Format</code>. Значение типа <code>text</code>, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если пропустить это поле или указать <code>NULL</code>, будет использован формат даты по умолчанию, заданный в <code>Culture</code>.</li>   <li><code>Culture</code>. Если <code>Format</code> не имеет значения NULL, <code>Culture</code> управляет определенными спецификаторами формата. Например, при использовании <code>"en-US"</code> значение <code>"tt"</code> представляется как <code>"AM" или "PM"</code>, тогда как для <code>"ar-EG"</code> значение <code>"tt"</code> выглядит как <code>"ص" или "م"</code>. Если <code>Format</code> имеет значение <code>NULL</code>, <code>Culture</code> задает формат, используемый по умолчанию. Если значение <code>Culture</code> равно <code>NULL</code> или пропущено, используется <code>Culture.Current</code>.</li></ul>Для поддержки прежних версий рабочих процессов <code>options</code> и <code>culture</code> также могут быть текстовыми значениями. При этом происходит то же самое, что и при <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Преобразование &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; в значение &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Результат может зависеть от текущего языка и региональных параметров.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Преобразование с помощью стандартного формата времени.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
